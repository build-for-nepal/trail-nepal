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
