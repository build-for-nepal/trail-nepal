import { db } from '../../src/config/db.js';
import { EXPERIENCE_DATA } from '../../src/data/index.js';
import { createExperience } from '../../src/modules/experience/experience.write.service.js';

// Idempotent seed: remove any existing row with the same slug, then recreate it
// from the checked-in data so every run produces the same records.
async function main() {
  for (const payload of Object.values(EXPERIENCE_DATA)) {
    await db.experience.deleteMany({ where: { slug: payload.slug } });
    const created = await createExperience(payload);
    console.log(`Seeded ${created.slug} (${created.type})`);
  }
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await db.$disconnect();
  });
