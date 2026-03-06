import {
  View,
  Text,
  StyleSheet,
  SectionList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { useMemo, useRef, useState } from 'react';
import { router } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { conditionsIndexMeta, conditionsData, Condition } from '@/demo/conditions';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

type Section = {
  title: string;
  data: Condition[];
};

export default function ConditionsIndexScreen() {
  const { language } = useLanguage();
  const insets = useSafeAreaInsets();

  const [query, setQuery] = useState('');
  const listRef = useRef<SectionList<Condition>>(null);

  /* ───────────────────────────────
     Build A–Z sections
  ─────────────────────────────── */
  const sections = useMemo<Section[]>(() => {
    const allConditions = Object.values(conditionsData);

    const filtered = query.trim()
      ? allConditions.filter(c =>
          c.hero.title[language].toLowerCase().includes(query.toLowerCase())
        )
      : allConditions;

    const grouped: Record<string, Condition[]> = {};

    filtered.forEach(condition => {
      const letter = condition.hero.title[language][0].toUpperCase();
      if (!grouped[letter]) grouped[letter] = [];
      grouped[letter].push(condition);
    });

    return Object.keys(grouped)
      .sort()
      .map(letter => ({
        title: letter,
        data: grouped[letter].sort((a, b) =>
          a.hero.title[language].localeCompare(b.hero.title[language])
        ),
      }));
  }, [language, query]);

  /* ───────────────────────────────
     Helpers
  ─────────────────────────────── */
  const highlight = (text: string) => {
    if (!query) return <Text>{text}</Text>;

    const lower = text.toLowerCase();
    const q = query.toLowerCase();
    const index = lower.indexOf(q);

    if (index === -1) return <Text>{text}</Text>;

    return (
      <Text>
        {text.slice(0, index)}
        <Text style={styles.highlight}>
          {text.slice(index, index + query.length)}
        </Text>
        {text.slice(index + query.length)}
      </Text>
    );
  };

  /* ───────────────────────────────
     Render
  ─────────────────────────────── */
  const renderItem = ({ item }: { item: Condition }) => (
    <TouchableOpacity
      style={styles.card}
      activeOpacity={0.8}
      onPress={() => router.push(`/conditions/${item.slug}`)}
    >
      <Text style={styles.cardTitle}>
        {highlight(item.hero.title[language])}
      </Text>
      <Text style={styles.cardSubtitle}>
        {item.hero.subtitle[language]}
      </Text>
    </TouchableOpacity>
  );

  const renderSectionHeader = ({ section }: { section: Section }) => (
    <View style={styles.sectionHeader}>
      <Text style={styles.sectionHeaderText}>{section.title}</Text>
    </View>
  );

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top },
      ]}
    >
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>
          {conditionsIndexMeta.title[language]}
        </Text>
        <Text style={styles.description}>
          {conditionsIndexMeta.description[language]}
        </Text>
      </View>

      {/* Search */}
      <TextInput
        placeholder={language === 'sw' ? 'Tafuta hali...' : 'Search conditions...'}
        value={query}
        onChangeText={setQuery}
        style={styles.search}
        placeholderTextColor={tokens.colors.text.tertiary}
      />

      {/* Empty State */}
      {sections.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>
            {language === 'sw'
              ? 'Hakuna matokeo yanayolingana.'
              : 'No conditions match your search.'}
          </Text>
        </View>
      ) : (
        <SectionList
          ref={listRef}
          sections={sections}
          keyExtractor={item => item.slug}
          renderItem={renderItem}
          renderSectionHeader={renderSectionHeader}
          stickySectionHeadersEnabled
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.listContent,
            { paddingBottom: tokens.spacing.xl + insets.bottom },
          ]}
        />
      )}
    </View>
  );
}

/* ───────────────────────────────
   Styles
──────────────────────────────── */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  header: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  description: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  search: {
    margin: tokens.spacing.lg,
    paddingHorizontal: tokens.spacing.md,
    paddingVertical: tokens.spacing.sm,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.colors.surface.soft,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
  },

  listContent: {
    paddingHorizontal: tokens.spacing.lg,
  },

  sectionHeader: {
    backgroundColor: tokens.colors.surface.background,
    paddingVertical: tokens.spacing.sm,
  },

  sectionHeaderText: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
  },

  card: {
    paddingVertical: tokens.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: tokens.colors.surface.subtle,
  },

  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.medium,
    color: tokens.colors.text.primary,
  },

  cardSubtitle: {
    marginTop: tokens.spacing.xs,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
  },

  highlight: {
    color: tokens.colors.brand.primary,
    fontWeight: tokens.typography.weight.semibold,
  },

  empty: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: tokens.spacing.lg,
  },

  emptyText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    textAlign: 'center',
  },
});