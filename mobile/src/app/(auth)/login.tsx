import { Image } from 'expo-image';
import { Link, router } from 'expo-router';
import { Lock, Mail } from 'lucide-react-native';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import {
  authClient,
  AuthButton,
  AuthField,
  GoogleButton,
  SIGNUP_HREF,
  validateEmail,
  Wordmark,
} from '@/features/auth';

const HERO = require('../../../assets/images/auth/hero.png');

// Deliberately generic: never reveal which of the two was wrong.
const INVALID_CREDENTIALS = 'Invalid email or password';

export default function Login() {
  const insets = useSafeAreaInsets();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState<string | null>(null);
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    const invalidEmail = validateEmail(email);
    setEmailError(invalidEmail);
    setFormError(null);

    // Only the email format is checked here. The password is not held to the
    // sign-up rules: an account created before the policy would otherwise be
    // locked out of its own login form, which is what the web's form does.
    if (invalidEmail || !password) {
      if (!password) setFormError('Enter your password.');
      return;
    }

    setBusy(true);
    const { error } = await authClient.signIn.email({
      email: email.trim(),
      password,
    });
    setBusy(false);

    if (error) {
      const status = error.status ?? 0;
      setFormError(
        status === 400 || status === 401 || status === 403
          ? INVALID_CREDENTIALS
          : (error.message ?? 'Could not sign in. Please try again.'),
      );
      return;
    }

    router.replace('/');
  };

  const signInWithGoogle = async () => {
    setFormError(null);
    setBusy(true);

    // The expo plugin takes it from here: it asks the backend for the Google
    // authorization URL, opens it through the backend's own
    // /expo-authorization-proxy, and stores the session cookie that comes back
    // on the trailsnepal:// deep link. Google only ever redirects to the
    // backend, never to the app, so no native OAuth client is involved.
    const { error } = await authClient.signIn.social({
      provider: 'google',
      // Relative on purpose: the plugin turns it into a deep link.
      callbackURL: '/',
    });

    if (error) {
      setBusy(false);
      // The backend answers PROVIDER_NOT_FOUND when GOOGLE_CLIENT_ID and
      // GOOGLE_CLIENT_SECRET are unset, which is a deployment state rather
      // than anything the user did. "Provider not found" would mean nothing
      // to them.
      const unconfigured =
        error.status === 404 || error.code === 'PROVIDER_NOT_FOUND';
      setFormError(
        unconfigured
          ? 'Google sign-in is not available right now.'
          : (error.message ?? 'Could not sign in with Google.'),
      );
      return;
    }

    // Dismissing the browser resolves without an error but without a session,
    // so the session is what decides, not the absence of an error. On native
    // the plugin never navigates for us either way.
    const { data } = await authClient.getSession();
    setBusy(false);
    if (data) router.replace('/');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-auth-bg"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="grow justify-center px-[24px]"
        contentContainerStyle={{
          paddingTop: insets.top + 24,
          paddingBottom: insets.bottom + 24,
        }}
      >
        <Image
          source={HERO}
          contentFit="contain"
          style={{ width: '100%', height: 220 }}
          accessibilityLabel=""
        />

        <Wordmark className="mt-[18px]" />

        <View className="mt-[28px] gap-[16px]">
          <AuthField
            icon={Mail}
            placeholder="Email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              setEmailError(null);
              setFormError(null);
            }}
            keyboardType="email-address"
            autoComplete="email"
            error={emailError}
          />

          <AuthField
            icon={Lock}
            placeholder="Password"
            value={password}
            onChangeText={(value) => {
              setPassword(value);
              setFormError(null);
            }}
            secure
            autoComplete="current-password"
          />
        </View>

        {/* The design has "Forgot Password?" here. Left out on purpose: the
            backend's sendResetPassword is commented out as DISABLED (future)
            and no SMTP is configured, so the link would go nowhere. The web
            commented its own out for the same reason. */}

        {formError ? (
          <Text
            accessibilityRole="alert"
            className="mt-[12px] text-center font-poppins text-[13px] leading-[18px] text-load-over"
          >
            {formError}
          </Text>
        ) : null}

        <View className="mt-[24px]">
          <AuthButton
            label="Login"
            busyLabel="Logging in…"
            busy={busy}
            onPress={() => void submit()}
          />
        </View>

        <View className="my-[20px] flex-row items-center">
          <View className="h-px flex-1 bg-border" />
          <Text className="px-[14px] font-poppins text-[13px] leading-[18px] text-auth-body">
            or
          </Text>
          <View className="h-px flex-1 bg-border" />
        </View>

        <GoogleButton busy={busy} onPress={() => void signInWithGoogle()} />

        <View className="mt-[28px] flex-row justify-center">
          <Text className="font-poppins text-[14px] leading-[20px] text-auth-body">
            Don&apos;t have an account?{' '}
          </Text>
          <Link href={SIGNUP_HREF} replace>
            <Text className="font-poppins-semibold text-[14px] leading-[20px] text-brand">
              Sign Up
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
