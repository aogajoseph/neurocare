import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLanguage } from '@/i18n/LanguageContext';
import { emergencyData } from '@/demo/emergency';
import { tokens } from '@/theme/design-tokens';

export default function EmergencySlugScreen({ params }: { params: { slug: string } }) {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();

  // Currently slug is not dynamic; using first section as placeholder
  const section = emergencyData.sections.find(s => s.id === params.slug) ?? emergencyData.sections[0];

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <ScrollView contentContainerStyle={[styles.content, { paddingBottom: insets.bottom + tokens.spacing.xl }]}>
        <Text style={styles.sectionTitle}>{section.title[language]}</Text>
        <Text style={styles.sectionContent}>{section.content[language]}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { 
    flex: 1, 
    backgroundColor: tokens.colors.surface.background 
  },
  content: { 
    paddingHorizontal: tokens.spacing.lg, 
    paddingTop: tokens.spacing.md 
  },
  sectionTitle: { 
    fontSize: tokens.typography.size.md, 
    fontWeight: tokens.typography.weight.semibold, 
    color: tokens.colors.brand.primary, 
    marginBottom: tokens.spacing.sm 
  },
  sectionContent: { 
    fontSize: tokens.typography.size.sm, 
    lineHeight: tokens.typography.lineHeight.normal, 
    color: tokens.colors.text.secondary 
  },
});
