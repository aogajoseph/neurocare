import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView 
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ChevronLeft } from 'lucide-react-native';

import { reportData } from '@/demo/report';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

export default function ReportCategoryScreen() {
  const insets = useSafeAreaInsets();
  const { language } = useLanguage();
  const { slug } = useLocalSearchParams<{ slug: string }>();

  const section = reportData.sections.find(s => s.id === slug);

  if (!section) {
    return (
      <View style={[styles.root, { paddingTop: insets.top }]}>
        <Text style={styles.error}>Content not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: section.title[language], 
          headerShown: true,
          headerBackTitleVisible: false,
          
          headerLeft: ({ tintColor }) => (
            <TouchableOpacity
              onPress={() => router.back()}
              style={{ paddingHorizontal: 12 }}
            >
              <Ionicons name="chevron-back" size={24} color={tintColor} />
            </TouchableOpacity>
          ),
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
          <Text style={styles.title}>
            {section.title[language]}
          </Text>
          <Text style={styles.description}>
            {section.description[language]}
          </Text>

          <View style={styles.block}>
            <Text style={styles.blockTitle}>Contacts</Text>
            {section.contacts.map((contact, index) => (
              <Text key={index} style={styles.contact}>
                {contact.type}: {contact.value}
              </Text>
            ))}
          </View>

          {/* Instructions */}
          <View style={styles.block}>
            <Text style={styles.blockTitle}>How to Report</Text>

            {section.instructions[language].map((step, index) => (
              <Text key={index} style={styles.step}>
                {index + 1}. {step}
              </Text>
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
  title: {
    fontSize: tokens.typography.size.xl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  content: {
    paddingHorizontal: tokens.spacing.lg,
    paddingTop: tokens.spacing.lg,
  },
  description: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
    marginBottom: tokens.spacing.xl,
  },
  block: {
    marginBottom: tokens.spacing.xl,
  },
  blockTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.sm,
  },
  contact: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },
  step: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    marginBottom: tokens.spacing.xs,
    lineHeight: tokens.typography.lineHeight.normal,
  },
  error: {
    padding: tokens.spacing.lg,
    color: tokens.colors.text.secondary,
  },
});
