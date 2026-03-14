// src/components/resources/VolunteerForm.tsx
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Switch,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';

type FieldType =
  | 'text'
  | 'email'
  | 'phone'
  | 'textarea'
  | 'select'
  | 'multi-select'
  | 'checkbox'
  | 'rating';

type Option = {
  value: string;
  label: string;
};

type Field = {
  id: string;
  label: string;
  type: FieldType;
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
  language: 'en' | 'sw';
  onSubmit?: (responses: Record<string, any>) => void;
};

export default function VolunteerForm({ form, onSubmit }: Props) {
  const initialState: Record<string, any> = {};
  form.fields.forEach((f) => {
    if (f.type === 'multi-select') initialState[f.id] = [];
    else if (f.type === 'checkbox') initialState[f.id] = false;
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
          (Array.isArray(val) && val.length === 0) ||
          (typeof val === 'boolean' && val === false)
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
    Alert.alert('Form Submitted', form.successMessage);

    if (onSubmit) onSubmit(responses);
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
            <Text style={[styles.optionText, isSelected && styles.optionTextSelected]}>
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
        <View key={field.id} style={{ marginBottom: tokens.spacing.lg }}>
          {field.type === 'checkbox' ? (
            <View>
              <Text style={styles.checkboxTitle}>Consent</Text>
              <View style={styles.checkboxRow}>
                <Switch
                  value={responses[field.id]}
                  onValueChange={(val) => handleChange(field.id, val)}
                />
                <Text style={styles.checkboxDesc}>{field.label}</Text>
              </View>
            </View>
          ) : (
            <>
              <Text style={styles.label}>{field.label}</Text>

              {field.type === 'text' || field.type === 'email' || field.type === 'phone' ? (
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
              ) : field.type === 'rating' ? (
                <View style={styles.ratingContainer}>
                  {[1, 2, 3, 4, 5].map((num) => (
                    <TouchableOpacity
                      key ={num}
                      style={[
                        styles.ratingCircle,
                        responses[field.id] === num && styles.ratingSelected,
                      ]}
                      onPress={() => handleChange(field.id, num)}
                    >
                      <Text
                        style={[
                          styles.ratingText,
                          responses[field.id] === num && styles.ratingTextSelected,
                        ]}
                      >
                        {num}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </View>
              ) : null}
            </>
          )}
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
    flexGrow: 1,
    backgroundColor: tokens.colors.surface.background,
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
  },
  textarea: {
    minHeight: 100,
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
    marginBottom: tokens.spacing.md,
  },
  optionSelected: {
    borderColor: tokens.colors.brand.primary,
    backgroundColor: tokens.colors.brand.primary,
  },
  optionText: {
    color: tokens.colors.text.primary,
  },
  optionTextSelected: {
    color: tokens.colors.text.inverse,
  },
  ratingContainer: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
    marginTop: tokens.spacing.sm,
  },
  ratingCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ratingSelected: {
    backgroundColor: tokens.colors.brand.primary,
    borderColor: tokens.colors.brand.primary,
  },
  ratingText: {
    color: tokens.colors.text.primary,
  },
  ratingTextSelected: {
    color: tokens.colors.text.inverse,
  },
  submitButton: {
    backgroundColor: tokens.colors.brand.primary,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.xxl,
  },
  submitText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginTop: tokens.spacing.xsm,
    maxWidth: '80%',
  },
  checkboxTitle: {
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
    marginTop: tokens.spacing.sm,
  },
  checkboxDesc: {
    color: tokens.colors.text.secondary,
    fontSize: tokens.typography.size.sm,
    marginLeft: tokens.spacing.sm,
    marginTop: tokens.spacing.md,
  },
});