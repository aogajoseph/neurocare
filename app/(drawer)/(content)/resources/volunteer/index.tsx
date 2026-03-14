// app/(drawer)/(content)/resources/volunteer/index.tsx
import React from 'react';
import { ScrollView, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { tokens } from '@/theme/design-tokens';
import { resources } from '@/demo/resources';
import VolunteerForm from '@/components/resources/VolunteerForm';
import { useLanguage } from '@/i18n/LanguageContext';

export default function VolunteerScreen() {
  const { language } = useLanguage(); // 'en' or 'sw'

  const volunteerResource = resources.find((r) => r.slug === 'volunteer');

  if (!volunteerResource) {
    return (
      <ScrollView contentContainerStyle={styles.center}>
        <Text>Volunteer resource not found.</Text>
      </ScrollView>
    );
  }

  const form = volunteerResource.form;

  if (!form) {
    return (
      <ScrollView contentContainerStyle={styles.center}>
        <Text>No volunteer form defined.</Text>
      </ScrollView>
    );
  }

  // Localize the form labels, placeholders, and options
  const localizedForm = {
    ...form,
    fields: form.fields.map((f) => ({
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
    submitLabel: form.submitLabel?.[language] ?? 'Submit',
    successMessage: form.successMessage?.[language] ?? 'Thank you!',
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Volunteer',
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
        <Text style={styles.title}>{volunteerResource.title[language]}</Text>

        {/* Subtitle */}
        <Text style={styles.subtitle}>{volunteerResource.subtitle[language]}</Text>

        {/* Volunteer Form */}
        <VolunteerForm form={localizedForm} language={language} />
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.background,
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
});