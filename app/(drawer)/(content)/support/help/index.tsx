// app/(drawer)/(content)/support/index.tsx
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Image,
  TouchableOpacity,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { router, Stack } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';

import { useLanguage } from '@/i18n/LanguageContext';
import { helpData } from '@/demo/help';
import { tokens } from '@/theme/design-tokens';

export default function HelpScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Help & Support',
          headerShown: true,
          headerBackTitle: 'Back',
          headerLeft: () => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingRight: 12 }}
            >
              <ChevronLeft size={24} />
            </TouchableOpacity>
          )
        }}
      />

      <View style={[styles.root]}>
        <ScrollView
          contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + tokens.spacing.xl }]}
          showsVerticalScrollIndicator={false}
        >
          {/* Optional Hero Image */}
          {helpData.hero.image && (
            <Image source={helpData.hero.image} style={styles.heroImage} />
          )}

          {/* Hero Title & Subtitle */}
          <View style={styles.heroText}>
            <Text style={styles.title}>{helpData.hero.title[language]}</Text>
            <Text style={styles.subtitle}>{helpData.hero.subtitle[language]}</Text>
          </View>

          {/* Sections */}
          {helpData.sections.map(section => (
            <View key={section.id} style={styles.section}>
              <Text style={styles.subTitle}>{section.title[language]}</Text>
              <Text style={styles.paragraph}>{section.content[language]}</Text>
            </View>
          ))}
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
    paddingTop: tokens.spacing.lg,
  },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: tokens.radius.md,
    marginBottom: tokens.spacing.md,
  },
  heroText: {
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
  subTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  paragraph: {
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },
});
