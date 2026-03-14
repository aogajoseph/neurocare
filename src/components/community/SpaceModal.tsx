import React from 'react';
import {
  View,
  Text,
  Pressable,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { tokens } from '@/theme/design-tokens';
import { CommunitySpace } from '@/demo/community-spaces';

type SpaceModalProps = {
  space: CommunitySpace;
  onClose: () => void;
  language?: 'en' | 'sw';
};

export default function SpaceModal({
  space,
  onClose,
  language = 'en',
}: SpaceModalProps) {
  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        {/* Ribbon */}
        {space.moderation.level !== 'light' && (
          <View style={styles.ribbon}>
            <Text style={styles.ribbonText}>
              {language === 'sw'
                ? 'Nafasi hii inasimamiwa, tafadhali kuwa heshima'
                : 'This space is moderated, please be respectful'}
            </Text>
          </View>
        )}

        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>{space.title[language]}</Text>
          <Pressable onPress={onClose}>
            <Text style={styles.closeText}>✕</Text>
          </Pressable>
        </View>

        <ScrollView style={styles.content}>
          {/* Welcome message */}
          {space.systemMessages?.welcome && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {language === 'sw' ? 'Ujumbe wa Karibu' : 'Welcome Message'}
              </Text>
              <Text style={styles.sectionText}>
                {space.systemMessages.welcome[language]}
              </Text>
            </View>
          )}

          {/* About Section */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {language === 'sw' ? 'Kuhusu Space Hii' : 'About this Space'}
            </Text>
            <Text style={styles.sectionText}>
              {space.aboutSpace[language]}
            </Text>
          </View>

          {/* Rules / Guidelines */}
          {space.moderation.showGuidelines && space.systemMessages?.rules && (
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>
                {language === 'sw' ? 'Kanuni' : 'Rules'}
              </Text>
              <Text style={styles.sectionText}>
                {space.systemMessages?.rules && (
                  <View style={styles.section}>
                    {space.systemMessages.rules[language].map((rule, i) => (
                      <Text key={i} style={styles.sectionText}>
                        {i + 1}. {rule}
                      </Text>
                    ))}
                  </View>
                )}
              </Text>
            </View>
          )}

          {/* Meta / Details */}
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>
              {language === 'sw' ? 'Taarifa Muhimu' : 'Details'}
            </Text>
            <Text style={styles.metaText}>
              {language === 'sw' ? 'Imeundwa na:' : 'Created by:'}{' '}
              {space.systemMessages.meta?.createdBy || '-'}
            </Text>
            <Text style={styles.metaText}>
              {language === 'sw' ? 'Inasimamiwa na:' : 'Moderated by:'}{' '}
              {space.systemMessages.meta?.moderatedBy || '-'}
            </Text>
            <Text style={styles.metaText}>
              {language === 'sw' ? 'Imeundwa Tarehe:' : 'Created on:'}{' '}
              {space.systemMessages.meta?.createdOn || '-'}
            </Text>
            <Text style={styles.metaText}>
              {language === 'sw' ? 'Wanachama wa sasa:' : 'Current members:'}{' '}
              {space.memberCount}
            </Text>
          </View>
        </ScrollView>

        {/* Close */}
        <Pressable style={styles.cancelButton} onPress={onClose}>
          <Text style={styles.cancelText}>
            {language === 'sw' ? 'Ghairi' : 'Close'}
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
  ribbon: {
    backgroundColor: tokens.colors.brand.primary,
    padding: tokens.spacing.sm,
    alignItems: 'center',
  },
  ribbonText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
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
  closeText: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.text.muted,
  },
  content: {
    padding: tokens.spacing.md,
  },
  section: {
    marginBottom: tokens.spacing.lg,
  },
  sectionTitle: {
    fontWeight: tokens.typography.weight.bold,
    fontSize: tokens.typography.size.md,
    marginBottom: tokens.spacing.sm,
    color: tokens.colors.text.primary,
  },
  sectionText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
    lineHeight: 20,
  },
  metaText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    lineHeight: 18,
    marginBottom: tokens.spacing.xs,
  },
  cancelButton: {
    padding: tokens.spacing.md,
    alignItems: 'center',
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  cancelText: {
    color: tokens.colors.text.primary,
    fontWeight: tokens.typography.weight.semibold,
    fontSize: tokens.typography.size.md,
  },
});
