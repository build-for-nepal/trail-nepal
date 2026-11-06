/**
 * Environment label derived from how the workflow builds each deploy
 * (.github/workflows/deploy-github-pages.yml):
 *   - staging build:    NEXT_PUBLIC_BASE_PATH='/staging'
 *   - production build: NEXT_PUBLIC_BASE_PATH=''
 * The build-time value is the primary signal; the runtime URL is a fallback.
 */
export function getEnvLabel(): string {
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  if (basePath === '/staging') return 'staging';

  if (typeof window !== 'undefined') {
    const path = window.location.pathname;
    if (path === '/staging' || path.startsWith('/staging/')) return 'staging';
    const { hostname } = window.location;
    if (hostname === 'localhost' || hostname === '127.0.0.1') return 'local';
  }

  return 'not staging (production/main or other)';
}

/** console.log the current environment along with the given message. */
export function logEnv(msg: string, ...extra: unknown[]): void {
  console.log(`[env: ${getEnvLabel()}] ${msg}`, ...extra);
}
