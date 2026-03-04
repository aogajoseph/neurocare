import React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';

type FieldType = 'text' | 'number' | 'select' | 'multi-select' | 'rating';

type Field = {
  id: string,
  label: string,
  type: FieldType;
  options?: string[];
};

type Props = {
  field: Field;
  value: any;
  onChange: (value: any) => void;
};

export default function FormField({ field, value, onChange }: Props) {
  const renderSelect = (multi = false) => (
    <View style={styles.optionsContainer}>
      {field.options?.map((option) => {
        const isSelected = multi
          ? value?.includes(option)
          : value === option;
  
        return (
          <TouchableOpacity
            key={option}
            style={[
              styles.option,
              isSelected && styles.optionSelected,
            ]}
            onPress={() => {
              if (multi) {
                const newValue = isSelected
                  ? value.filter((v: string) => v !== option)
                  : [...(value || []), option];
                onChange(newValue);
              } else {
                onChange(option);
              }
            }}
          >
            <Text
              style={[
                styles.optionText,
                isSelected && styles.optionTextSelected,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{field.label}</Text>
      {field.type === 'number' && (
        <TextInput
          style={styles.input}
          keyboardType="numeric"
          value={value?.toString()}
          onChangeText={(text) => onChange(Number(text))}
          placeholder="Enter number"
          placeholderTextColor={tokens.colors.text.muted}
        />
      )}

      {field.type === 'select' && renderSelect(false)}

      {field.type === 'multi-select' && renderSelect(true)}

      {field.type === 'rating' && (
        <View style={styles.ratingContainer}>
          {[1, 2, 3, 4, 5].map((num) => (
            <TouchableOpacity
              key={num}
              style={[
                styles.ratingCircle,
                value === num && styles.ratingSelected,
              ]}
              onPress={() => onChange(num)}
            >
              <Text
                style={[
                  styles.ratingText,
                  value === num && styles.ratingTextSelected,
                ]}
              >
                {num}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: tokens.spacing.xl,
  },

  label: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.sm,
  },

  input: {
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    minHeight: 44,
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
    backgroundColor: tokens.colors.surface.card,
  },

  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: tokens.spacing.sm,
  },

  option: {
    paddingVertical: tokens.spacing.sm,
    paddingHorizontal: tokens.spacing.md,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border.strong,
    backgroundColor: tokens.colors.surface.subtle,
  },

  optionSelected: {
    backgroundColor: tokens.colors.brand.primary,
    borderColor: tokens.colors.brand.primary,
  },

  optionText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    fontWeight: tokens.typography.weight.medium,
  },

  optionTextSelected: {
    color: tokens.colors.text.inverse,
  },

  ratingContainer: {
    flexDirection: 'row',
    gap: tokens.spacing.md,
  },

  ratingCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: tokens.colors.border.strong,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tokens.colors.surface.subtle,
  },

  ratingSelected: {
    backgroundColor: tokens.colors.brand.primary,
    borderColor: tokens.colors.brand.primary,
  },

  ratingText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.medium,
    color: tokens.colors.text.secondary,
  },

  ratingTextSelected: {
    color: tokens.colors.text.inverse,
  },
});