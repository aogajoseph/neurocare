import { View, Text, StyleSheet, FlatList, TextInput, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';

import { useMemo } from 'react';
import { communitySpaces } from '@/demo/community-spaces';

export default function CommunitySpaceScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const { role, spaceId } = useLocalSearchParams<{
    role: string;
    spaceId: string;
  }>();

  const space = useMemo(() => {
    return communitySpaces.find(
      (s) => s.id === spaceId && s.role === role
    );
  }, [spaceId, role]);

  if (!space) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          {language === 'sw'
            ? 'Nafasi haipatikani'
            : 'Space not found'}
        </Text>
      </View>
    );
  }  

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>
            {space.title[language]}
          </Text>
          <Text style={styles.subtitle}>
            {language === 'sw'
              ? `Wanachama ${space.memberCount}`
              : `${space.memberCount} Members`}
          </Text>
        </View>
      </View>

      {/* Moderation / System Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerText}>
          {language === 'sw'
            ? 'Eneo hili linasimamiwa. Tafadhali kuwa na heshima.'
            : 'This space is moderated. Please be respectful.'}
        </Text>
      </View>

      {/* Messages (empty for now) */}
      <FlatList
        data={[]}
        keyExtractor={(item) => String(item)}
        renderItem={() => null}
        contentContainerStyle={styles.messages}
        inverted
      />

      {/* Composer */}
      <View style={styles.composer}>
        <TextInput
          placeholder={
            language === 'sw'
              ? 'Andika ujumbe...'
              : 'Type a message...'
          }
          style={styles.input}
        />
        <Pressable style={styles.send}>
          <Text style={styles.sendText}>
            {language === 'sw' ? 'Tuma' : 'Send'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.lg,
    gap: tokens.spacing.md,
    padding: tokens.spacing.lg,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.card,
  },

  back: {
    fontSize: 22,
    color: tokens.colors.brand.primary,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  metaRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  
  memberCount: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    fontWeight: tokens.typography.weight.medium,
  },

  subtitle: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },

  banner: {
    padding: tokens.spacing.md,
    backgroundColor: tokens.colors.surface.soft,
    borderBottomWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },

  bannerText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    textAlign: 'center',
  },

  messages: {
    flexGrow: 1,
    padding: tokens.spacing.lg,
  },

  composer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: tokens.spacing.md,
    gap: tokens.spacing.sm,
    borderTopWidth: 1,
    borderColor: tokens.colors.border.subtle,
    backgroundColor: tokens.colors.surface.card,
  },

  input: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
    borderRadius: tokens.radius.md,
    padding: tokens.spacing.md,
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },

  send: {
    backgroundColor: tokens.colors.brand.primary,
    paddingHorizontal: tokens.spacing.lg,
    paddingVertical: tokens.spacing.md,
    borderRadius: tokens.radius.md,
  },

  sendText: {
    color: tokens.colors.text.inverse,
    fontWeight: tokens.typography.weight.semibold,
  },
});
