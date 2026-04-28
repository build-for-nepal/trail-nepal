import {
  readdir,
  mkdir,
  copyFile,
  stat,
  writeFile,
} from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative, dirname, extname } from "node:path";
import sharp from "sharp";

// Disable libvips file caching so the source isn't kept mmap'd between calls,
// which causes EPERM when overwriting on Windows.
sharp.cache(false);

const ROOT = new URL("../public/images/", import.meta.url).pathname.replace(
  /^\/([A-Za-z]:)/,
  "$1",
);
const BACKUP_ROOT = join(ROOT, "_originals");
const MAX_WIDTH = 1920;
const SKIP_BELOW_BYTES = 100 * 1024; // 100 KB
const QUALITY = { jpeg: 80, webp: 75, png: 80 };

function formatFor(ext) {
  const e = ext.toLowerCase();
  if (e === ".jpg" || e === ".jpeg") return "jpeg";
  if (e === ".png") return "png";
  if (e === ".webp") return "webp";
  return null;
}

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    if (e.name === "_originals") continue;
    const p = join(dir, e.name);
    if (e.isDirectory()) yield* walk(p);
    else if (e.isFile()) yield p;
  }
}

async function compress(file) {
  const ext = extname(file);
  const format = formatFor(ext);
  if (!format) return null;

  const before = (await stat(file)).size;
  if (before < SKIP_BELOW_BYTES) {
    return { file, before, after: before, skipped: "tiny" };
  }

  const rel = relative(ROOT, file);
  const backupPath = join(BACKUP_ROOT, rel);

  // Idempotency: if a backup already exists, treat the file as already
  // processed *unless* its size still matches the backup (then a previous
  // run failed before writing the compressed bytes — retry it).
  if (existsSync(backupPath)) {
    const backupSize = (await stat(backupPath)).size;
    if (backupSize !== before) {
      return { file, before, after: before, skipped: "already-compressed" };
    }
    // Same size as backup → previous attempt didn't update the file, retry
    // without overwriting the original backup.
  } else {
    await mkdir(dirname(backupPath), { recursive: true });
    await copyFile(file, backupPath);
  }

  const pipeline = sharp(file, { failOn: "none" })
    .rotate()
    .resize({ width: MAX_WIDTH, withoutEnlargement: true });

  if (format === "jpeg") {
    pipeline.jpeg({ quality: QUALITY.jpeg, mozjpeg: true });
  } else if (format === "webp") {
    pipeline.webp({ quality: QUALITY.webp, effort: 5 });
  } else if (format === "png") {
    pipeline.png({ palette: true, quality: QUALITY.png, effort: 9 });
  }

  // Encode to a buffer first, then overwrite — avoids the rename-while-locked
  // EPERM that hits on Windows when sharp briefly retains the source handle.
  const buf = await pipeline.toBuffer();
  await writeFile(file, buf);

  const after = (await stat(file)).size;
  return { file, before, after, skipped: false };
}

async function main() {
  const results = [];
  for await (const file of walk(ROOT)) {
    try {
      const r = await compress(file);
      if (r) results.push(r);
    } catch (err) {
      console.error(`FAILED: ${relative(ROOT, file)}  -  ${err.message}`);
    }
  }

  let totalBefore = 0;
  let totalAfter = 0;
  let processed = 0;
  let tiny = 0;
  let alreadyDone = 0;
  for (const r of results) {
    totalBefore += r.before;
    totalAfter += r.after;
    if (r.skipped === "tiny") tiny++;
    else if (r.skipped === "already-compressed") alreadyDone++;
    else processed++;
  }

  const sorted = results
    .filter((r) => !r.skipped)
    .sort((a, b) => b.before - a.before);
  for (const r of sorted) {
    const rel = relative(ROOT, r.file);
    const pct = (((r.before - r.after) / r.before) * 100).toFixed(1);
    console.log(
      `${rel.padEnd(48)} ${(r.before / 1024 / 1024).toFixed(2).padStart(6)} MB -> ${(r.after / 1024 / 1024).toFixed(2).padStart(6)} MB  (-${pct}%)`,
    );
  }

  console.log();
  console.log(
    `Processed ${processed}, already compressed ${alreadyDone}, tiny ${tiny} (under ${SKIP_BELOW_BYTES / 1024} KB)`,
  );
  if (totalBefore > 0) {
    const totalPct = (
      ((totalBefore - totalAfter) / totalBefore) *
      100
    ).toFixed(1);
    console.log(
      `Total this run: ${(totalBefore / 1024 / 1024).toFixed(1)} MB -> ${(totalAfter / 1024 / 1024).toFixed(1)} MB  (-${totalPct}%)`,
    );
  }
  console.log(`Originals mirrored at: ${BACKUP_ROOT}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
