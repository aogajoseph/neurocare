import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  TouchableOpacity,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import { useState } from 'react';
import { useAuth } from '@/auth/AuthContext';
import { useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { Ionicons } from '@expo/vector-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function LoginScreen() {
  const { signIn } = useAuth();
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const [identifier, setIdentifier] = useState(''); // email / phone / username
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLogin = async () => {
    if (!identifier || !password) {
      return Alert.alert('Error', 'Please enter your credentials.');
    }

    const success = await signIn(identifier, password);

    if (!success) {
      return Alert.alert('Error', 'Invalid username, email, phone, or password.');
    }

    router.replace('/(drawer)/(tabs)/home');
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
        <Text style={styles.title}>Sign In</Text>

        {/* Email / Phone / Username */}
        <TextInput
          style={styles.input}
          placeholder="Email, Phone or Username"
          value={identifier}
          onChangeText={setIdentifier}
          keyboardType="default"
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
          <Pressable onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
            <Ionicons
              name={showPassword ? 'eye' : 'eye-off'}
              size={22}
              color={tokens.colors.text.muted}
            />
          </Pressable>
        </View>

        {/* Remember Me */}
        <Pressable style={styles.rememberMe} onPress={() => setRememberMe(!rememberMe)}>
          <View style={[styles.checkbox, rememberMe && styles.checkboxChecked]}>
            {rememberMe && (
              <Ionicons
                name="checkmark"
                size={16}
                color={tokens.colors.text.inverse}
                style={{ alignSelf: 'center' }}
              />
            )}
          </View>
          <Text style={styles.rememberText}>Remember Me</Text>
        </Pressable>

        {/* Login button */}
        <Pressable style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Sign In</Text>
        </Pressable>

        {/* Forgot Password */}
        <TouchableOpacity
          onPress={() => router.push('/(auth)/forgot-password')}
          style={{ marginBottom: tokens.spacing.lg }}
        >
          <Text style={styles.linkText}>Forgot Password?</Text>
        </TouchableOpacity>

        {/* Create Account link */}
        <TouchableOpacity onPress={() => router.push('/(drawer)/(auth)/signup')}>
          <Text style={styles.linkText}>Don't have an account? Sign Up</Text>
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
  rememberMe: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.lg,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderRadius: tokens.radius.sm,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    marginRight: tokens.spacing.sm,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: tokens.colors.brand.primary,
    borderColor: tokens.colors.brand.primary,
  },
  rememberText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
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
