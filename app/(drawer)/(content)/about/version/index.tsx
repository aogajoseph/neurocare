import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView,
  TouchableOpacity 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { versionData } from '@/demo/version';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function VersionScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Version & Updates',
          headerShown: true,
          headerBackTitle: 'Back',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingHorizontal: 12 }}
            >
              <ChevronLeft size={24} />
            </TouchableOpacity>
          )
        }}
      />

      <View style={[styles.root]}>
        <ScrollView
          contentContainerStyle={[
            styles.content,
            { paddingBottom: insets.bottom + tokens.spacing.xl },
          ]}
          showsVerticalScrollIndicator={false}
        >
          {/* Hero */}
          <View style={styles.hero}>
            <Text style={styles.title}>
              {versionData.hero.title[language]}
            </Text>
            <Text style={styles.subtitle}>
              {versionData.hero.subtitle[language]}
            </Text>
          </View>

          {/* Sections */}
          {versionData.sections.map(section => (
            <View key={section.id} style={styles.section}>
              <Text style={styles.sectionTitle}>
                {section.title[language]}
              </Text>
              <Text style={styles.sectionDescription}>
                {section.description[language]}
              </Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  );
}

/* ───────────────────────────────────────────── */

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  content: {
    paddingHorizontal: tokens.spacing.lg,
  },

  hero: {
    marginTop: tokens.spacing.lg,
    marginBottom: tokens.spacing.xl,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.sm,
  },

  subtitle: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  section: {
    marginBottom: tokens.spacing.xl,
  },

  sectionTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.xs,
  },

  sectionDescription: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },
});
