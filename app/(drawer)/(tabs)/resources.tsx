import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';
import { resources } from '@/demo/resources';

export default function ResourcesScreen() {
  const router = useRouter();
  const { language } = useLanguage();

  const sections = [
    {
      id: 'explore',
      title: { en: 'Explore', sw: 'Chunguza' },
      slugs: ['articles', 'questionnaires', 'talks', 'training-videos'],
    },
    {
      id: 'media',
      title: { en: 'Media', sw: 'Vyombo vya Habari' },
      slugs: ['recorded-webinars', 'podcast'],
    },
    {
      id: 'get-involved',
      title: { en: 'Get Involved', sw: 'Shiriki' },
      slugs: ['donate', 'volunteer', 'partnerships', 'events'],
    },
    {
      id: 'ncf',
      title: { en: 'Neuro Care Foundation', sw: 'Neuro Care Foundation' },
      slugs: ['about-ncf'],
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Header */}
      <Text style={styles.title}>
        {language === 'sw' ? 'Rasilimali' : 'Resources'}
      </Text>

      <Text style={styles.subtitle}>
        {language === 'sw'
          ? 'Jifunze, chunguza na gundua maarifa na msaada'
          : 'Learn, explore and discover supportive tools & knowledge'}
      </Text>

      {/* Sections */}
      {sections.map((section) => {
        const sectionResources = resources.filter((r) =>
          section.slugs.includes(r.slug)
        );

        return (
          <View key={section.id} style={styles.section}>
            <Text style={styles.sectionTitle}>
              {section.title[language]}
            </Text>

            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.horizontalList}
            >
              {sectionResources.map((item) => (
                <Pressable
                  key={item.slug}
                  onPress={() => router.push(item.route)}
                  style={({ pressed }) => [
                    styles.card,
                    pressed && styles.cardPressed,
                  ]}
                >
                  <View style={styles.iconWrapper}>
                    <Ionicons
                      name={item.icon as any}
                      size={22}
                      color={tokens.colors.brand.primary}
                    />
                  </View>

                  <Text style={styles.cardTitle}>
                    {item.title[language]}
                  </Text>

                  <Text style={styles.cardSubtitle}>
                    {item.subtitle[language]}
                  </Text>
                </Pressable>
              ))}
            </ScrollView>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
  },

  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.xs,
  },

  subtitle: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.xl,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },

  section: {
    marginBottom: tokens.spacing.xl,
  },

  sectionTitle: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.sm,
  },

  horizontalList: {
    paddingRight: tokens.spacing.md,
  },

  card: {
    width: 160,
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginRight: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    ...tokens.elevation.card,
  },

  cardPressed: {
    backgroundColor: tokens.colors.surface.soft,
  },

  iconWrapper: {
    width: 40,
    height: 40,
    borderRadius: tokens.radius.md,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: tokens.spacing.sm,
  },

  cardTitle: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  cardSubtitle: {
    fontSize: tokens.typography.size.xs,
    color: tokens.colors.text.muted,
    lineHeight: tokens.typography.lineHeight.normal,
  },
});
