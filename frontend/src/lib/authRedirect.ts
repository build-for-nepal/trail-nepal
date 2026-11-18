/**
 * Where to send the visitor after they log in or sign up from the navigation.
 * Kept in sessionStorage so it survives moving between the login, sign-up and
 * forgot-password pages. Only same-site paths are ever returned.
 */
const RETURN_KEY = 'trails-nepal-return-to';

const AUTH_PATHS = ['/login', '/signup', '/forgot-password'];

function isAuthPath(path: string): boolean {
  return AUTH_PATHS.some(
    (authPath) => path === authPath || path.startsWith(`${authPath}/`),
  );
}

function isSafePath(path: string | null | undefined): path is string {
  return Boolean(path) && path!.startsWith('/') && !path!.startsWith('//');
}

/** Remembers the current page, unless it is itself an auth page. */
export function rememberReturnTo(): void {
  const { pathname, search } = window.location;
  if (isAuthPath(pathname)) return;
  try {
    window.sessionStorage.setItem(RETURN_KEY, `${pathname}${search}`);
  } catch {
    // Storage blocked: the visitor lands on the home page instead.
  }
}

/** The remembered page, forgotten once read. Falls back to the home page. */
export function takeReturnTo(): string {
  try {
    const path = window.sessionStorage.getItem(RETURN_KEY);
    window.sessionStorage.removeItem(RETURN_KEY);
    return isSafePath(path) && !isAuthPath(path) ? path : '/';
  } catch {
    return '/';
  }
}
