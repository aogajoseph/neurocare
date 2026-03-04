// src/components/resources/PartnershipForm.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';

type Option = {
  value: string;
  label: string;
};

type Field = {
  id: string;
  type: string;
  label: string;
  placeholder?: string;
  required?: boolean;
  options?: Option[];
};

type Form = {
  fields: Field[];
  submitLabel: string;
  successMessage: string;
};

type Props = {
  form: Form;
};

export default function PartnershipForm({ form }: Props) {
  const initialState: Record<string, any> = {};

  form.fields.forEach((f) => {
    if (f.type === 'multi-select') initialState[f.id] = [];
    else initialState[f.id] = '';
  });

  const [responses, setResponses] = useState(initialState);

  const handleChange = (fieldId: string, value: any) => {
    setResponses((prev) => ({ ...prev, [fieldId]: value }));
  };

  const validate = () => {
    for (const field of form.fields) {
      if (field.required) {
        const val = responses[field.id];
        if (
          val === '' ||
          val === null ||
          (Array.isArray(val) && val.length === 0)
        ) {
          Alert.alert('Incomplete', `Please complete: ${field.label}`);
          return false;
        }
      }
    }
    return true;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    Alert.alert('Submitted', form.successMessage);
    setResponses(initialState);
  };

  const renderSelect = (field: Field, multi = false) => (
    <View style={styles.optionsContainer}>
      {field.options?.map((opt) => {
        const isSelected = multi
          ? responses[field.id]?.includes(opt.value)
          : responses[field.id] === opt.value;

        return (
          <TouchableOpacity
            key={opt.value}
            style={[styles.option, isSelected && styles.optionSelected]}
            onPress={() => {
              if (multi) {
                const newVal = isSelected
                  ? responses[field.id].filter((v: string) => v !== opt.value)
                  : [...(responses[field.id] || []), opt.value];
                handleChange(field.id, newVal);
              } else {
                handleChange(field.id, opt.value);
              }
            }}
          >
            <Text
              style={[
                styles.optionText,
                isSelected && styles.optionTextSelected,
              ]}
            >
              {opt.label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      {form.fields.map((field) => (
        <View key={field.id} style={styles.fieldWrapper}>
          <Text style={styles.label}>{field.label}</Text>

          {field.type === 'text' ||
          field.type === 'email' ||
          field.type === 'phone' ? (
            <TextInput
              style={styles.input}
              value={responses[field.id]}
              onChangeText={(text) => handleChange(field.id, text)}
              placeholder={field.placeholder}
              placeholderTextColor={tokens.colors.text.muted}
              keyboardType={
                field.type === 'email'
                  ? 'email-address'
                  : field.type === 'phone'
                  ? 'phone-pad'
                  : 'default'
              }
            />
          ) : field.type === 'textarea' ? (
            <TextInput
              style={[styles.input, styles.textarea]}
              value={responses[field.id]}
              onChangeText={(text) => handleChange(field.id, text)}
              placeholder={field.placeholder}
              placeholderTextColor={tokens.colors.text.muted}
              multiline
            />
          ) : field.type === 'select' ? (
            renderSelect(field, false)
          ) : field.type === 'multi-select' ? (
            renderSelect(field, true)
          ) : null}
        </View>
      ))}

      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitText}>{form.submitLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: tokens.spacing.lg,
  },
  fieldWrapper: {
    marginBottom: tokens.spacing.lg,
  },
  label: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    marginBottom: tokens.spacing.sm,
  },
  input: {
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    minHeight: 44,
    fontSize: tokens.typography.size.md,
  },
  textarea: {
    minHeight: 120,
    textAlignVertical: 'top',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing.sm,
  },
  option: {
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
    borderRadius: tokens.radius.xl,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  optionSelected: {
    backgroundColor: tokens.colors.brand.primary,
    borderColor: tokens.colors.brand.primary,
  },
  optionText: {
    color: tokens.colors.text.primary,
  },
  optionTextSelected: {
    color: tokens.colors.text.inverse,
  },
  submitButton: {
    marginTop: tokens.spacing.xl,
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.lg,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
  },
  submitText: {
    color: tokens.colors.text.inverse,
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
  },
});