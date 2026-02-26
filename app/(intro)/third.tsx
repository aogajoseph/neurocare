import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { tokens } from '@/theme/design-tokens';

export default function IntroThird() {
  const opacity = useRef(new Animated.Value(0)).current;
  const translateY = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 400,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const enterApp = async () => {
    await AsyncStorage.setItem('introSeen', 'true');
    router.replace('/(drawer)/(tabs)/home');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={{ opacity, transform: [{ translateY }] }}>
        <Text style={styles.title}>Built With Care</Text>
        <Text style={styles.body}>
          Empathy, Accuracy, Trust & Understanding with Safety & Security enforced at every step.
        </Text>

        <Pressable style={styles.button} onPress={enterApp}>
          <Text style={styles.buttonText}>
            Enter Neuro Care <Text style={styles.arrow}> →</Text>
          </Text>
        </Pressable>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
    paddingHorizontal: tokens.spacing.xl,
    justifyContent: 'center',
  },
  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
    textAlign: tokens.alignment.text.center,
    marginBottom: tokens.spacing.md,
  },
  body: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    textAlign: tokens.alignment.text.center,
    marginBottom: tokens.spacing.xxl,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
  button: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
  },
  buttonText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
    textAlign: tokens.alignment.text.center,
    fontSize: tokens.typography.size.md,
  },
});
