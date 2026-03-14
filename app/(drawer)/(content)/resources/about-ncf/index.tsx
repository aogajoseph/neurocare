import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { tokens } from '@/theme/design-tokens';
import { resources } from '@/demo/resources';
import { useLanguage } from '@/i18n/LanguageContext';

export default function AboutNCFScreen() {
  const { language } = useLanguage();

  const resource = resources.find((r) => r.slug === 'about-ncf');

  if (!resource) {
    return (
      <View style={styles.center}>
        <Text>About resource not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'About NCF',
          headerShown: true,
          headerBackTitle: 'Back',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingRight: 12 }}
            >
              <ChevronLeft size={24} />
            </TouchableOpacity>
          )
        }}
      />

      <ScrollView contentContainerStyle={styles.container}>
        {/* Title */}
        <Text style={styles.title}>{resource.title[language]}</Text>
        <Text style={styles.subtitle}>{resource.subtitle[language]}</Text>

        {/* Hero Description */}
        <Text style={styles.heroText}>
          {resource.hero.description[language]}
        </Text>

        {/* Stats */}
        <View style={styles.statsContainer}>
          {resource.stats.map((stat) => (
            <View key={stat.id} style={styles.statCard}>
              <Text style={styles.statValue}>{stat.value}</Text>
              <Text style={styles.statLabel}>
                {stat.label[language]}
              </Text>
            </View>
          ))}
        </View>

        {/* Sections */}
        {resource.sections.map((section) => (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {section.title[language]}
            </Text>
            <Text style={styles.sectionDescription}>
              {section.description[language]}
            </Text>
          </View>
        ))}

        {/* CTA */}
        <View style={styles.ctaContainer}>
          <Text style={styles.ctaTitle}>
            {resource.callToAction.title[language]}
          </Text>
          <Text style={styles.ctaDescription}>
            {resource.callToAction.description[language]}
          </Text>
          <TouchableOpacity
            style={styles.ctaButton}
            onPress={() => router.push(resource.callToAction.route)}
          >
            <Text style={styles.ctaButtonText}>
              {resource.callToAction.buttonLabel[language]}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.background,
  },
  back: {
    marginBottom: tokens.spacing.md,
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.primary,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },
  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  subtitle: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.lg,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
  heroText: {
    fontSize: tokens.typography.size.md,
    lineHeight: tokens.typography.lineHeight.relaxed,
    marginBottom: tokens.spacing.xl,
    marginTop: tokens.spacing.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: tokens.spacing.xxl,
  },
  statCard: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
  },
  statLabel: {
    fontSize: tokens.typography.size.sm,
    textAlign: 'center',
    marginTop: tokens.spacing.xs,
    maxWidth: '80%'
  },
  section: {
    marginBottom: tokens.spacing.sm,
  },
  sectionTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    marginBottom: tokens.spacing.sm,
  },
  sectionDescription: {
    lineHeight: tokens.typography.lineHeight.relaxed,
    color: tokens.colors.text.secondary,
  },
  ctaContainer: {
    marginTop: tokens.spacing.xl,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.colors.surface.card,
  },
  ctaTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    marginBottom: tokens.spacing.sm,
  },
  ctaDescription: {
    marginBottom: tokens.spacing.md,
    color: tokens.colors.text.secondary,
  },
  ctaButton: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.xxl,
    alignItems: 'center',
  },
  ctaButtonText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
  },
});