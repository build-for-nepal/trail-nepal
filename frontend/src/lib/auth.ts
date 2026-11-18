import {
  type AuthUser,
  type LoginMethod,
  useAuthStore,
} from '@/store/authStore';

export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

export type SignInPayload = {
  email: string;
  password: string;
};

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
};

/**
 * Auth integration points.
 *
 * The backend auth module does not exist yet, so each function below has a
 * mock body and a real one to write. The mock keeps the UI flows demonstrable
 * in local development: it stores an account's name and connected login
 * methods (never a password) and the current session in localStorage. It is
 * OFF in production builds unless NEXT_PUBLIC_MOCK_AUTH=true, so a deployed
 * site never pretends to authenticate.
 *
 * To integrate, replace each mock call with the request noted on the
 * function, keep the contract (resolve on success, reject with an Error whose
 * message is safe to show), and delete the mock section.
 */
const MOCK_AUTH =
  process.env.NODE_ENV !== 'production' ||
  process.env.NEXT_PUBLIC_MOCK_AUTH === 'true';

const UNAVAILABLE = 'This is not available yet.';

// ---- Mock persistence -----------------------------------------------------

const SESSION_KEY = 'trails-nepal-mock-session';
const ACCOUNTS_KEY = 'trails-nepal-mock-accounts';

type MockAccount = {
  name: string;
  image: string | null;
  methods: LoginMethod[];
};

function readJson<T>(key: string, fallback: T): T {
  try {
    const raw = window.localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJson(key: string, value: unknown) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Storage blocked: the session just won't survive a reload.
  }
}

const accountKey = (email: string) => email.trim().toLowerCase();

function readAccounts(): Record<string, MockAccount> {
  return readJson<Record<string, MockAccount>>(ACCOUNTS_KEY, {});
}

function saveAccount(email: string, account: MockAccount) {
  writeJson(ACCOUNTS_KEY, { ...readAccounts(), [accountKey(email)]: account });
}

function startSession(
  email: string,
  account: MockAccount,
  signedInWith: LoginMethod,
): AuthUser {
  const user: AuthUser = {
    name: account.name,
    email,
    image: account.image,
    signedInWith,
    methods: account.methods,
  };
  writeJson(SESSION_KEY, user);
  useAuthStore.getState().setUser(user);
  return user;
}

/** Updates the connected methods of the signed-in account and session. */
function updateMethods(methods: LoginMethod[]) {
  const user = useAuthStore.getState().user;
  if (!user?.email) throw new Error('Sign in to manage your login methods.');

  const account = readAccounts()[accountKey(user.email)] ?? {
    name: user.name ?? '',
    image: user.image,
    methods: user.methods,
  };
  saveAccount(user.email, { ...account, methods });
  startSession(user.email, { ...account, methods }, user.signedInWith);
}

/** Restores the mock session after a reload. Call once on the client. */
export function restoreSession(): void {
  const { setUser, setRestored } = useAuthStore.getState();
  if (MOCK_AUTH) {
    const user = readJson<AuthUser | null>(SESSION_KEY, null);
    if (user?.email) setUser(user);
  }
  setRestored();
}

// ---- Public API -----------------------------------------------------------

/** Real: POST `${NEXT_PUBLIC_API_URL}/api/auth/register`, then start a session. */
export async function signUp(payload: SignUpPayload): Promise<void> {
  if (!MOCK_AUTH) throw new Error('Registration is not available yet.');

  const existing = readAccounts()[accountKey(payload.email)];
  if (existing) {
    throw new Error('An account with this email already exists. Log in.');
  }
  const account: MockAccount = {
    name: payload.name,
    image: null,
    methods: ['password'],
  };
  saveAccount(payload.email, account);
  startSession(payload.email, account, 'password');
}

/**
 * Real: POST `${NEXT_PUBLIC_API_URL}/api/auth/login`, then start a session.
 * The mock cannot check a password (none is stored), so it only requires the
 * account to exist with email login set up.
 */
export async function signIn(payload: SignInPayload): Promise<void> {
  if (!MOCK_AUTH) throw new Error('Sign-in is not available yet.');

  const account = readAccounts()[accountKey(payload.email)];
  if (!account) {
    throw new Error('Incorrect email or password.');
  }
  if (!account.methods.includes('password')) {
    throw new Error(
      'This account uses Google. Continue with Google, then set up email login in Settings.',
    );
  }
  startSession(payload.email, account, 'password');
}

/**
 * Real: the Google OAuth redirect/popup. A Google sign-in with an email that
 * already has an account must attach to that account, not create a second one.
 */
export async function signInWithGoogle(): Promise<void> {
  if (!MOCK_AUTH) throw new Error('Google sign-in is not available yet.');

  const email = 'traveller@gmail.com';
  const existing = readAccounts()[accountKey(email)];
  const account: MockAccount = existing
    ? {
        ...existing,
        methods: Array.from(new Set([...existing.methods, 'google'])),
      }
    : { name: 'Google Traveller', image: null, methods: ['google'] };
  saveAccount(email, account);
  startSession(email, account, 'google');
}

export function signOut(): void {
  useAuthStore.getState().clearUser();
  try {
    window.localStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

/**
 * Real: POST `/api/auth/password` to create a password on the signed-in
 * account (no second account is created).
 */
export async function setUpEmailLogin(password: string): Promise<void> {
  if (!MOCK_AUTH) throw new Error(UNAVAILABLE);
  void password;
  const user = useAuthStore.getState().user;
  if (!user) throw new Error('Sign in to set up email login.');
  updateMethods(Array.from(new Set([...user.methods, 'password'])));
}

/** Real: POST `/api/auth/password/change`. */
export async function changePassword(
  payload: ChangePasswordPayload,
): Promise<void> {
  if (!MOCK_AUTH) throw new Error(UNAVAILABLE);
  void payload;
  const user = useAuthStore.getState().user;
  if (!user?.methods.includes('password')) {
    throw new Error('Email login is not set up on this account.');
  }
}

/** Real: link a Google identity to the signed-in account (OAuth). */
export async function connectGoogle(): Promise<void> {
  if (!MOCK_AUTH) throw new Error(UNAVAILABLE);
  const user = useAuthStore.getState().user;
  if (!user) throw new Error('Sign in to connect Google.');
  updateMethods(Array.from(new Set([...user.methods, 'google'])));
}
