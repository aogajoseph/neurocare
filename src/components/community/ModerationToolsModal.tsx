// src/components/community/ModerationToolsModal.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { Snowflake, UserX, Lock } from 'lucide-react-native';
import { tokens } from '@/theme/design-tokens';

type Props = {
  visible: boolean;
  onClose: () => void;
  isModerator: boolean;
  onFreezeSpace: () => void;
  isFrozen: boolean;
  language?: 'en' | 'sw';
};

export default function ModerationToolsModal({
  visible,
  onClose,
  isModerator,
  onFreezeSpace,
  isFrozen,
  language = 'en',
}: Props) {
  if (!visible) return null;

  const disabledStyle = !isModerator ? styles.itemDisabled : null;

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>
            {language === 'sw'
              ? 'Zana za Uangalizi (Wanasimamizi Pekee)'
              : 'Moderation Tools (Moderators Only)'}
          </Text>
          <Pressable onPress={onClose}>
            <Text style={styles.close}>✕</Text>
          </Pressable>
        </View>

        {/* Freeze Space */}
        <Pressable
          style={[styles.item, disabledStyle]}
          disabled={!isModerator}
          onPress={onFreezeSpace}
        >
          <Snowflake
            size={18}
            color={!isModerator
              ? tokens.colors.text.muted
              : tokens.colors.text.primary}
          />

          <View>
            <Text style={styles.label}>
              {language === 'sw'
                ? isFrozen
                  ? 'Fungua Nafasi'
                  : 'Gandisha Nafasi'
                : isFrozen
                  ? 'Unfreeze Space'
                  : 'Freeze Space'}
            </Text>

            <Text style={styles.description}>
              {language === 'sw'
                ? isFrozen
                  ? 'Ruhusu shughuli kuendelea'
                  : 'Simamisha shughuli za muda'
                : isFrozen
                  ? 'Allow activity to resume'
                  : 'Temporarily pause activity'}
            </Text>
          </View>
        </Pressable>

        {/* Remove Message */}
        <Pressable style={[styles.item, disabledStyle]} disabled={!isModerator}>
          <UserX size={18} color={tokens.colors.text.primary} />
          <View>
            <Text style={styles.label}>
              {language === 'sw' ? 'Futa Ujumbe' : 'Remove Message'}
            </Text>
            <Text style={styles.description}>
              {language === 'sw'
                ? 'Ondoa ujumbe ulioingizwa'
                : 'Remove a specific message'}
            </Text>
          </View>
        </Pressable>

        {/* Freeze User */}
        <Pressable style={[styles.item, disabledStyle]} disabled={!isModerator}>
          <Lock size={18} color={tokens.colors.text.primary} />
          <View>
            <Text style={styles.label}>
              {language === 'sw' ? 'Funga Mtumiaji' : 'Freeze User'}
            </Text>
            <Text style={styles.description}>
              {language === 'sw'
                ? 'Zuia mtumiaji kuandika'
                : 'Temporarily block a user from posting'}
            </Text>
          </View>
        </Pressable>

        {/* Close Button */}
        <Pressable style={styles.closeButton} onPress={onClose}>
          <Text style={styles.closeButtonText}>
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
    maxHeight: '80%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: tokens.spacing.md,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
    alignItems: 'center',
  },
  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
    flex: 1,
  },
  close: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.text.muted,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
    paddingVertical: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.lg,
  },
  itemDisabled: {
    opacity: 0.4,
  },
  label: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
  description: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },
  closeButton: {
    padding: tokens.spacing.md,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    alignItems: 'center',
  },
  closeButtonText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
});
