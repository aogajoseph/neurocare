// app/(drawer)/(tabs)/(auth)/signup.tsx
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  Image,
  Alert,
} from 'react-native';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { tokens } from '@/theme/design-tokens';
import { demoUsers } from '@/demo/users';

export default function SignupScreen() {
  const router = useRouter();

  const [username, setUsername] = useState('');
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = () => {
    // Demo check: reject existing usernames
    const exists = demoUsers.some(
      (u) => u.username.toLowerCase() === username.toLowerCase(),
    );

    if (exists) {
      return Alert.alert('Username Taken', 'Please choose a different username.');
    }

    Alert.alert(
      'Sign Up (Demo Mode)',
      `Username: ${username}\nEmail/Phone: ${emailOrPhone} {\n\n}Account creation is disabled in demo mode.`,
    );

    router.replace('/(drawer)/(auth)/login');
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
        keyboardShouldPersistTaps="handled"
      >
        {/* Logo */}
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{
            width: 120,
            height: 40,
            resizeMode: 'contain',
            alignSelf: 'center',
            marginBottom: tokens.spacing.lg,
          }}
        />

        {/* Title */}
        <Text style={styles.title}>Create Account</Text>

        {/* Username */}
        <TextInput
          style={styles.input}
          placeholder="Create Username"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        {/* Email / Phone */}
        <TextInput
          style={styles.input}
          placeholder="Email or Phone Number"
          value={emailOrPhone}
          onChangeText={setEmailOrPhone}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        {/* Password */}
        <View style={styles.passwordContainer}>
          <TextInput
            style={[styles.input, { flex: 1, marginBottom: 0 }]}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <Pressable
            onPress={() => setShowPassword((v) => !v)}
            style={styles.eyeIcon}
          >
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color={tokens.colors.text.muted}
            />
          </Pressable>
        </View>

        {/* Sign Up button */}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>

        {/* Sign In link */}
        <TouchableOpacity
          onPress={() => router.push('/(drawer)/(auth)/login')}
        >
          <Text style={styles.linkText}>
            Already have an account? Sign In
          </Text>
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
    marginBottom: tokens.spacing.xl,
    textAlign: 'center',
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
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
    marginBottom: tokens.spacing.md,
  },
  eyeIcon: {
    position: 'absolute',
    right: tokens.spacing.md,
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
