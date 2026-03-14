// app/(drawer)/(content)/support/[slug].tsx
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '@/i18n/LanguageContext';
import { helpData } from '@/demo/help';
import { tokens } from '@/theme/design-tokens';

export default function HelpSlugScreen({ params }: { params: { slug: string } }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  const section = helpData.sections.find(s => s.id === params.slug);

  if (!section) return <View style={[styles.root, { paddingTop: insets.top }]}><Text>Content not found</Text></View>;

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView
        contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + tokens.spacing.xl }]}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.subTitle}>{section.title[language]}</Text>
        <Text style={styles.paragraph}>{section.content[language]}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: tokens.colors.surface.background },
  content: { paddingHorizontal: tokens.spacing.lg, paddingTop: tokens.spacing.lg },
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
