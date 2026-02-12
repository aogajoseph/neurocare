import React from 'react';
import {
  View,
  Text,
  Pressable,
  StyleSheet,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';
import { Shield, Trash2, UserX, Snowflake } from 'lucide-react-native';

type Props = {
  visible: boolean;
  onClose: () => void;
  isModerator: boolean;
  language?: 'en' | 'sw';
};

export default function ModerationToolsModal({
  visible,
  onClose,
  isModerator,
  language = 'en',
}: Props) {
  if (!visible) return null;

  const disabled = !isModerator;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {language === 'sw'
              ? 'Zana za Usimamizi (Wasimamizi Pekee)'
              : 'Moderation Tools (Moderators Only)'}
          </Text>

          <Pressable onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        {/* Options */}
        <View style={styles.content}>

          <Pressable
            style={[styles.item, disabled && styles.itemDisabled]}
            disabled={disabled}
          >
            <Trash2 size={18} color={tokens.colors.text.primary} />
            <View>
              <Text style={styles.label}>
                {language === 'sw' ? 'Ondoa Ujumbe' : 'Remove Message'}
              </Text>
              <Text style={styles.description}>
                {language === 'sw'
                  ? 'Futa ujumbe usiofaa'
                  : 'Delete inappropriate content'}
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.item, disabled && styles.itemDisabled]}
            disabled={disabled}
          >
            <UserX size={18} color={tokens.colors.text.primary} />
            <View>
              <Text style={styles.label}>
                {language === 'sw' ? 'Ondoa Mtumiaji' : 'Remove User'}
              </Text>
              <Text style={styles.description}>
                {language === 'sw'
                  ? 'Zuia au ondoa mshiriki'
                  : 'Restrict or remove a member'}
              </Text>
            </View>
          </Pressable>

          <Pressable
            style={[styles.item, disabled && styles.itemDisabled]}
            disabled={disabled}
          >
            <Snowflake size={18} color={tokens.colors.text.primary} />
            <View>
              <Text style={styles.label}>
                {language === 'sw' ? 'Gandisha Space' : 'Freeze Space'}
              </Text>
              <Text style={styles.description}>
                {language === 'sw'
                  ? 'Simamisha shughuli za muda'
                  : 'Temporarily pause activity'}
              </Text>
            </View>
          </Pressable>

        </View>

        {/* Footer */}
        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>
            {language === 'sw' ? 'Funga' : 'Close'}
          </Text>
        </Pressable>

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
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
    flex: 1,
  },
  close: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.text.muted,
  },
  content: {
    paddingVertical: tokens.spacing.sm,
  },
  item: {
    flexDirection: 'row',
    gap: tokens.spacing.sm,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
    alignItems: 'center',
  },
  itemDisabled: {
    opacity: 0.4,
  },
  label: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
  description: {
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
  },
  button: {
    padding: tokens.spacing.md,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
});
