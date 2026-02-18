// app/(drawer)/(content)/resources/[slug].tsx
import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { tokens } from '@/theme/design-tokens';
import { useLanguage } from '@/i18n/LanguageContext';
import { resources } from '@/demo/resources';

export default function ResourceDetailScreen() {
  const router = useRouter();
  const { language } = useLanguage();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const resource = resources.find(r => r.slug === slug);

  if (!resource) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>Resource not found</Text>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <Text style={styles.backText}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      {/* Back Button */}
      <Pressable onPress={() => router.back()} style={styles.backButton}>
        <Ionicons name="arrow-back-outline" size={22} color={tokens.colors.brand.primary} />
        <Text style={styles.backText}>Back</Text>
      </Pressable>

      {/* Header */}
      <Text style={styles.title}>{resource?.title[language]}</Text>
      <Text style={styles.subtitle}>{resource?.subtitle[language]}</Text>

      {/* Placeholder content for v1 */}
      <View style={styles.content}>
        <Text style={styles.contentText}>
          This is the detail view for <Text style={{ fontWeight: '700' }}>{resource.title[language]}</Text>.
          {'\n\n'}In a future version, this could render:
        </Text>

        <Text style={styles.bullet}>• Articles, guides, questionnaires, videos</Text>
        <Text style={styles.bullet}>• Expert webinars & podcasts</Text>
        <Text style={styles.bullet}>• Donation & volunteering options</Text>
        <Text style={styles.bullet}>• Events and partnerships info</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: tokens.spacing.md,
  },
  backText: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginLeft: tokens.spacing.sm,
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
    marginBottom: tokens.spacing.lg,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
  content: {
    paddingVertical: tokens.spacing.md,
  },
  contentText: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.sm,
  },
  bullet: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.sm,
    paddingLeft: tokens.spacing.md,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },
  errorText: {
    fontSize: tokens.typography.size.lg,
    color: tokens.colors.state.error,
    marginBottom: tokens.spacing.md,
  },
});
