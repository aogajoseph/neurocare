import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { tokens } from '@/theme/design-tokens';

export default function ForgotPasswordScreen() {
  const router = useRouter();
  const [emailOrPhone, setEmailOrPhone] = useState('');

  const handleReset = () => {
    if (!emailOrPhone.trim()) {
      return Alert.alert('Missing Information', 'Please enter your email or phone number.');
    }

    Alert.alert(
      'Password Reset (Demo Mode)',
      'This app is currently in demo mode. {\n\n}In production, a reset link or code would be sent to your email or phone.',
      [
        {
          text: 'Back to Login',
          onPress: () => router.replace('/(auth)/login'),
        },
      ],
    );
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      style={{ flex: 1, backgroundColor: tokens.colors.surface.soft }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: 'center',
          paddingHorizontal: tokens.spacing.xl,
          paddingBottom: tokens.spacing.xxl,
        }}
      >
        {/* Title */}
        <Text style={styles.title}>Forgot Password</Text>

        {/* Description */}
        <Text style={styles.description}>
          Enter your email address or phone number.
          {'\n'}We’ll help you reset your password.
        </Text>

        {/* Email / Phone input */}
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          autoCapitalize="none"
          keyboardType="email-address"
        />

        {/* Reset button */}
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Send Reset Link</Text>
        </TouchableOpacity>

        {/* Back to login */}
        <TouchableOpacity onPress={() => router.replace('/(auth)/login')}>
          <Text style={styles.linkText}>Back to Sign In</Text>
        </TouchableOpacity>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.dark,
    textAlign: 'center',
    marginBottom: tokens.spacing.sm,
  },
  description: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    textAlign: 'center',
    marginBottom: tokens.spacing.xl,
    lineHeight: 22,
  },
  input: {
    backgroundColor: tokens.colors.surface.card,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    fontSize: tokens.typography.size.md,
  },
  button: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    marginBottom: tokens.spacing.md,
  },
  buttonText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
    textAlign: 'center',
  },
  linkText: {
    color: tokens.colors.brand.link,
    textAlign: 'center',
    fontSize: tokens.typography.size.md,
    marginTop: tokens.spacing.sm,
  },
});
