import React, { useState } from 'react';
import {
  View,
 Text,
 TextInput,
 Pressable,
 StyleSheet,
 Alert,
 Platform,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';

type Props = {
  visible: boolean;
  onClose: () => void;
  language?: 'en' | 'sw';
};

export default function ReportIssueModal({
  visible,
  onClose,
  language = 'en',
}: Props) {
  const [issue, setIssue] = useState('');

  if (!visible) return null;

  const handleSubmit = () => {
    if (!issue.trim()) return;

    if (Platform.OS === 'web') {
      window.alert(
        language === 'sw'
          ? 'Tatizo limetumwa. Asante.'
          : 'Issue submitted. Thank you.'
      );
    } else {
      Alert.alert(
        language === 'sw' ? 'Asante' : 'Thank You',
        language === 'sw'
          ? 'Tatizo limetumwa.'
          : 'Your issue has been submitted.'
      );
    }

    setIssue('');
    onClose();
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {language === 'sw' ? 'Ripoti Tatizo' : 'Report an Issue'}
          </Text>

          <Pressable onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        {/* Body */}
        <View style={styles.content}>
          <Text style={styles.label}>
            {language === 'sw'
              ? 'Eleza tatizo unalokutana nalo'
              : 'Describe the issue you are experiencing'}
          </Text>

          <TextInput
            style={styles.input}
            multiline
            numberOfLines={4}
            value={issue}
            onChangeText={setIssue}
            placeholder={
              language === 'sw'
                ? 'Andika hapa...'
                : 'Write here...'
            }
            placeholderTextColor={tokens.colors.text.muted}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          <Pressable style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelText}>
              {language === 'sw' ? 'Ghairi' : 'Cancel'}
            </Text>
          </Pressable>

          <Pressable style={styles.submitButton} onPress={handleSubmit}>
            <Text style={styles.submitText}>
              {language === 'sw' ? 'Tuma' : 'Submit'}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
  },

  container: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    overflow: 'hidden',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: tokens.spacing.md,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },

  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
  },

  close: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.text.muted,
  },

  content: {
    padding: tokens.spacing.md,
  },

  label: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.sm,
  },

  input: {
    minHeight: 100,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
    textAlignVertical: 'top',
  },

  footer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },

  cancelButton: {
    flex: 1,
    padding: tokens.spacing.md,
    alignItems: 'center',
  },

  submitButton: {
    flex: 1,
    padding: tokens.spacing.md,
    alignItems: 'center',
    backgroundColor: tokens.colors.brand.primary,
  },

  cancelText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    fontWeight: tokens.typography.weight.medium,
  },

  submitText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
  },
});
