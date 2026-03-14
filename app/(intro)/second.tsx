import { View, Text, StyleSheet, Pressable, Animated } from 'react-native';
import { useEffect, useRef } from 'react';
import { router } from 'expo-router';
import { tokens } from '@/theme/design-tokens';

export default function IntroSecond() {
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

  return (
    <View style={styles.container}>
      <Animated.View style={styles.cardContainer, { opacity, transform: [{ translateY }] }}>
        <Text style={styles.title}>You’re Not Alone</Text>
        <Text style={styles.body}>
          Interactive Spaces for Caregivers, PWDs and Health Professionals. All in one place.
        </Text>

        <Pressable style={styles.button} onPress={() => router.push('/(intro)/third')}>
          <Text style={styles.buttonText}>Continue</Text>
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
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    textAlign: tokens.alignment.text.center,
    marginBottom: tokens.spacing.md,
  },
  body: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.secondary,
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