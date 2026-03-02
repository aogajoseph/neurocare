import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { questionnaireForms } from '@/demo/forms';
import FormField from '@/components/resources/FormField';

export default function QuestionnaireDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();

  console.log('Received questionnaire slug:', slug);

  const form = questionnaireForms.find((f) => f.slug === slug);

  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  if (!slug) {
    return (
      <View style={styles.center}>
        <Text>No slug provided in route.</Text>
      </View>
    );
  }

  if (!form) {
    return (
      <View style={styles.center}>
        <Text>Form not found for slug:</Text>
        <Text style={{ fontWeight: 'bold', marginTop: 8 }}>
          {slug}
        </Text>
      </View>
    );
  }

  const handleChange = (fieldId: string, value: any) => {
    setResponses((prev) => ({
      ...prev,
      [fieldId]: value,
    }));
  };

  const validate = () => {
    for (const field of form.fields) {
      if (!responses[field.id]) {
        Alert.alert('Incomplete', `Please complete: ${field.label}`);
        return false;
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    Alert.alert(
      'Submission Successful',
      'Thank you. Your responses have been recorded. This information directly supports our program planning.'
    );

    setResponses({});
    router.back();
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      <Text style={styles.title}>{form.title}</Text>
      <Text style={styles.description}>{form.description}</Text>

      {form.fields.map((field) => (
        <FormField
          key={field.id}
          field={field}
          value={responses[field.id]}
          onChange={(value) => handleChange(field.id, value)}
        />
      ))}

      <TouchableOpacity
        style={styles.submitButton}
        onPress={handleSubmit}
      >
        <Text style={styles.submitText}>Submit</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: tokens.colors.surface.background,
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
    paddingBottom: tokens.spacing.xxl,
  },

  back: {
    marginBottom: tokens.spacing.md,
    color: tokens.colors.brand.primary,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.xl,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
    lineHeight: tokens.typography.lineHeight.relaxed,
    marginBottom: tokens.spacing.sm,
  },

  description: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.regular,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
    marginBottom: tokens.spacing.xl,
  },

  submitButton: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: tokens.spacing.lg,
  },

  submitText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
  },

  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.background,
  },
});