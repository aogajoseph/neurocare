import React, { useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { tokens } from '@/theme/design-tokens';
import { questionnaireForms } from '@/demo/forms';
import FormField from '@/components/resources/FormField';

export default function QuestionnaireDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const insets = useSafeAreaInsets();

  const form = questionnaireForms.find((f) => f.slug === slug);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  if (!slug || !form) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: 'Not Found', headerShown: true }} />
        <Text>{!slug ? 'No slug provided.' : 'Form not found.'}</Text>
      </View>
    );
  }

  const handleChange = (fieldId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [fieldId]: value }));
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
    Alert.alert('Success', 'Your responses have been recorded.');
    router.back();
  };

  return (
    <View style={styles.flex}>
      <Stack.Screen
        options={{
          title: form.title,
          headerShown: true,
          headerBackTitle: 'Back',
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()} style={{ paddingRight: 12 }}>
              <ChevronLeft size={24} />
            </TouchableOpacity>
          ),
        }}
      />
      
      <ScrollView 
        contentContainerStyle={[
          styles.container, 
          { paddingBottom: Math.max(insets.bottom, insets.top, tokens.spacing.xxl) }
        ]}
      >
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

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },
  container: {
    flexGrow: 1,
    padding: tokens.spacing.lg,
  },
  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  description: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.xl,
  },
  submitButton: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    marginTop: tokens.spacing.sm,
  },
  submitText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
