import { View, Text, StyleSheet, ScrollView, TextInput, Pressable } from 'react-native';
import { useMemo, useState } from 'react';
import { useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { communitySpaces } from '@/demo/community-spaces';
import { useLanguage } from '@/i18n/LanguageContext';
import { Ionicons } from '@expo/vector-icons';

export default function CaregiverSpacesScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const [query, setQuery] = useState('');

  const caregiverSpaces = useMemo(() => {
    return communitySpaces.filter((space) => space.role === 'caregiver');
  }, []);

  const filteredSpaces = useMemo(() => {
    if (!query.trim()) return caregiverSpaces;

    const q = query.toLowerCase();
    return caregiverSpaces.filter(
      (space) =>
        space.title[language].toLowerCase().includes(q) ||
        space.description[language].toLowerCase().includes(q),
    );
  }, [query, caregiverSpaces, language]);

  const groupedSpaces = useMemo(() => {
    return filteredSpaces.reduce<Record<string, typeof filteredSpaces>>((acc, space) => {
      const category = space.category[language];
      if (!acc[category]) acc[category] = [];
      acc[category].push(space);
      return acc;
    }, {});
  }, [filteredSpaces, language]);

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.title}>
        {language === 'sw' ? 'Nafasi za Walezi' : 'Caregiver Spaces'}
      </Text>

      <Text style={styles.subtitle}>
        {language === 'sw'
          ? 'Jiunge na nafasi zinazokufaa kikamilifu'
          : 'Join the spaces that support you best'}
      </Text>

      {/* Search */}
      <View style={styles.searchContainer}>
        <Ionicons
          name="search"
          size={18}
          color={tokens.colors.text.muted}
        />
        <TextInput
          placeholder={language === 'sw' ? 'Tafuta nafasi...' : 'Search spaces...'}
          placeholderTextColor={tokens.colors.text.muted}
          value={query}
          onChangeText={setQuery}
          style={styles.searchInput}
        />
      </View>

      {/* Spaces */}
      {Object.entries(groupedSpaces).map(([category, spaces]) => (
        <View key={category} style={styles.categoryBlock}>
          <Text style={styles.categoryTitle}>{category}</Text>

          {spaces.map((space) => (
            <Pressable
              key={space.id}
              style={({ pressed }) => [styles.spaceCard, pressed && styles.spaceCardPressed]}
            >
              <Text style={styles.spaceTitle}>{space.title[language]}</Text>
              <Text style={styles.spaceDescription}>{space.description[language]}</Text>

              {/* CTA + Member Count */}
              <View style={styles.cardFooter}>
                <Text 
                  style={styles.cta} 
                  onPress={() => router.push(`/(drawer)/(community)/caregiver/${space.id}`)}>
                  {language === 'sw' ? 'Tazama' : 'View'}
                </Text>
                <Text style={styles.memberCount}>
                  {space.memberCount} {language === 'sw' ? 'Wajumlisho' : 'Members'}
                </Text>
              </View>
            </Pressable>
          ))}
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
    textAlign: 'left',
    marginBottom: tokens.spacing.xs,
  },

  subtitle: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    textAlign: 'left',
    marginBottom: tokens.spacing.lg,
  },

  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.md,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    marginBottom: tokens.spacing.xl,
    gap: tokens.spacing.sm,
  },

  searchInput: {
    flex: 1,
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
  },

  categoryBlock: {
    marginBottom: tokens.spacing.xl,
  },

  categoryTitle: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },

  spaceCard: {
    backgroundColor: tokens.colors.surface.card,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    marginBottom: tokens.spacing.md,
  },

  spaceCardPressed: {
    backgroundColor: tokens.colors.surface.soft,
  },

  spaceTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  spaceDescription: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.sm,
  },

  cardFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: tokens.spacing.sm,
  },

  cta: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.link,
  },

  memberCount: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },
});
