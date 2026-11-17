export type SignUpPayload = {
  name: string;
  email: string;
  password: string;
};

/**
 * Registration integration point.
 *
 * The backend auth module does not exist yet. Once it does, replace the body
 * with the real request (e.g. POST `${NEXT_PUBLIC_API_URL}/api/auth/register`)
 * and return the created session/user. It intentionally does not fake success.
 */
export async function signUp(payload: SignUpPayload): Promise<void> {
  void payload;
  throw new Error('Registration is not available yet.');
}

export type ChangePasswordPayload = {
  currentPassword: string;
  newPassword: string;
};

/**
 * Password-change integration point. Like `signUp`, it does not fake success:
 * sign-in is Google-only today and there is no backend to hold a password.
 */
export async function changePassword(
  payload: ChangePasswordPayload,
): Promise<void> {
  void payload;
  throw new Error('Changing your password is not available yet.');
}
