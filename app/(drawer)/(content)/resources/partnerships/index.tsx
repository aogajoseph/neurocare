// app/(drawer)/(content)/resources/partnerships/index.tsx
import React from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { router } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { resources } from '@/demo/resources';
import { useLanguage } from '@/i18n/LanguageContext';
import PartnershipForm from '@/components/resources/PartnershipForm';

export default function PartnershipsScreen() {
  const { language } = useLanguage();

  const resource = resources.find((r) => r.slug === 'partnerships');

  if (!resource) {
    return (
      <View style={styles.center}>
        <Text>Partnership resource not found.</Text>
      </View>
    );
  }

  const localizedForm = {
    ...resource.form,
    fields: resource.form.fields.map((f) => ({
      ...f,
      label: f.label?.[language] ?? '',
      placeholder: f.placeholder?.[language] ?? '',
      options: f.options
        ? f.options.map((opt) => ({
            value: opt.value,
            label: opt.label?.[language] ?? '',
          }))
        : undefined,
    })),
    submitLabel: resource.form.submitLabel?.[language] ?? 'Submit',
    successMessage: resource.form.successMessage?.[language] ?? '',
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{resource.title[language]}</Text>
      <Text style={styles.subtitle}>{resource.subtitle[language]}</Text>

      {/* Horizontal Logos */}
      <View style={styles.partnersContainer}>
        <Text style={styles.partnersTitle}>{resource.partnership.title[language]}</Text>
      </View>
      <FlatList
        data={resource.partners}
        horizontal
        keyExtractor={(item) => item.id}
        showsHorizontalScrollIndicator={false}
        style={styles.logoList}
        renderItem={({ item }) => (
          <View style={styles.logoCard}>
            <Image
              source={item.logo}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        )}
      />

      {/* CTA Section */}
      <View style={styles.ctaContainer}>
        <Text style={styles.ctaTitle}>{resource.cta.title[language]}</Text>
        <Text style={styles.ctaDescription}>
          {resource.cta.description[language]}
        </Text>
      </View>

      {/* Partnership Form */}
      <PartnershipForm form={localizedForm} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: tokens.spacing.xl,
    paddingVertical: tokens.spacing.lg,
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
  partnersContainer: {
    marginBottom: tokens.spacing.lg,
    marginTop: tokens.spacing.lg,
  },
  partnersTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
  },
  logoList: {
    marginBottom: tokens.spacing.xl,
  },
  logoCard: {
    width: 120,
    height: 80,
    marginRight: tokens.spacing.md,
    marginBottom: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.surface.card,
  },
  logo: {
    width: 100,
    height: 80,
  },
  ctaContainer: {
    marginBottom: tokens.spacing.lg,
  },
  ctaTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    marginBottom: tokens.spacing.sm,
  },
  ctaDescription: {
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
});