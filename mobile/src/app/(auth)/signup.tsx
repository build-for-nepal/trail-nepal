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
  LOGIN_HREF,
  validateEmail,
  validatePassword,
  Wordmark,
} from '@/features/auth';
import {
  useLocationPermission,
  useNotificationPermission,
} from '@/features/permissions';

export default function SignUp() {
  const insets = useSafeAreaInsets();
  const location = useLocationPermission();
  const notifications = useNotificationPermission();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [errors, setErrors] = useState<{
    email?: string | null;
    password?: string | null;
    confirm?: string | null;
  }>({});
  const [formError, setFormError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);

  const submit = async () => {
    const next = {
      email: validateEmail(email),
      password: validatePassword(password),
      confirm: password !== confirm ? 'Passwords do not match.' : null,
    };
    setErrors(next);
    setFormError(null);
    if (next.email || next.password || next.confirm) return;

    setBusy(true);
    // Better Auth's endpoint schema requires `name`; the backend's before-hook
    // discards it, since personal details live on Profile rather than User.
    const { error } = await authClient.signUp.email({
      email: email.trim(),
      password,
      name: '',
    });

    if (error) {
      setBusy(false);
      setFormError(error.message ?? 'Could not create your account.');
      return;
    }

    // Sign-up starts a session, so the permission prompts appear over this
    // screen, as the designs show, before the app opens. Both are optional:
    // whatever the answer, onboarding continues.
    await location.ask();
    await notifications.ask();

    setBusy(false);
    router.replace('/');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      className="flex-1 bg-auth-bg"
    >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        contentContainerClassName="grow px-[24px]"
        contentContainerStyle={{
          paddingTop: insets.top + 40,
          paddingBottom: insets.bottom + 24,
        }}
      >
        <Wordmark />

        <Text
          accessibilityRole="header"
          className="mt-[26px] text-center font-poppins-semibold text-[26px] leading-[34px] text-auth-heading"
        >
          Let&apos;s Get Started!
        </Text>
        <Text className="mt-[2px] text-center font-poppins text-[15px] leading-[21px] text-auth-body">
          Create an account
        </Text>

        <View className="mt-[26px] gap-[16px]">
          <AuthField
            icon={Mail}
            placeholder="Email"
            value={email}
            onChangeText={(value) => {
              setEmail(value);
              setErrors((prev) => ({ ...prev, email: null }));
            }}
            keyboardType="email-address"
            autoComplete="email"
            error={errors.email}
          />

          <AuthField
            icon={Lock}
            placeholder="Password"
            value={password}
            onChangeText={(value) => {
              setPassword(value);
              setErrors((prev) => ({ ...prev, password: null }));
            }}
            secure
            autoComplete="new-password"
            error={errors.password}
          />

          <AuthField
            icon={Lock}
            placeholder="Confirm Password"
            value={confirm}
            onChangeText={(value) => {
              setConfirm(value);
              setErrors((prev) => ({ ...prev, confirm: null }));
            }}
            secure
            autoComplete="new-password"
            error={errors.confirm}
          />
        </View>

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
            label="Sign Up"
            busyLabel="Creating account…"
            busy={busy}
            onPress={() => void submit()}
          />
        </View>

        <View className="mt-[28px] flex-row justify-center">
          <Text className="font-poppins text-[14px] leading-[20px] text-auth-body">
            Already have an account?{' '}
          </Text>
          <Link href={LOGIN_HREF} replace>
            <Text className="font-poppins-semibold text-[14px] leading-[20px] text-brand">
              Login here
            </Text>
          </Link>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
