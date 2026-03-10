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

import { reportData } from '@/demo/report';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function ReportIndexScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Report a Concern',
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
              {reportData.hero.title[language]}
            </Text>
            <Text style={styles.subtitle}>
              {reportData.hero.subtitle[language]}
            </Text>
          </View>

          {/* Categories */}
          <View style={styles.categories}>
            {reportData.sections.map(section => (
              <TouchableOpacity
                key={section.id}
                style={styles.card}
                activeOpacity={0.8}
                onPress={() => router.push(`/support/report/${section.id}`)}
              >
                <Text style={styles.cardTitle}>
                  {section.title[language]}
                </Text>
                <Text style={styles.cardDescription}>
                  {section.description[language]}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </ScrollView>
      </View>
    </>
  );
}

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
    color: tokens.colors.text.secondary,
  },
  categories: {
    gap: tokens.spacing.lg,
  },
  card: {
    backgroundColor: tokens.colors.surface.subtle,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
  },
  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  cardDescription: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
  },
});
