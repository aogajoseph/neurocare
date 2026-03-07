// app/(drawer)/(content)/resources/[slug].tsx
import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  Pressable,
  TouchableOpacity,
} from 'react-native';
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

  const [expandedId, setExpandedId] = useState<string | null>(null);
  
  const toggle = (id: string) => {
    setExpandedId(prev => (prev === id ? null : id));
  };

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
      {/* Header */}
      <Text style={styles.title}>{resource?.title[language]}</Text>
      <Text style={styles.subtitle}>{resource?.subtitle[language]}</Text>

      {/* Placeholder content for v1 */}
      {resource.slug === 'articles' && (
      <View style={styles.accordionList}>
        {resource.items.map(item => {
          const expanded = expandedId === item.id;

          return (
            <Pressable
              key={item.id}
              style={styles.accordionCard}
              onPress={() => toggle(item.id)}
            >
              <View style={styles.accordionHeader}>
                <Text style={styles.accordionTitle}>
                  {item.title}
                </Text>

                <Ionicons
                  name={expanded ? 'chevron-up-outline' : 'chevron-down-outline'}
                  size={18}
                  color={tokens.colors.text.muted}
                />
              </View>

              {expanded && (
                <Text style={styles.accordionContent}>
                  {item.description}
                </Text>
              )}
            </Pressable>
          );
        })}
      </View>
    )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    marginTop: tokens.spacing.xl,
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
  accordionList: {
    marginTop: tokens.spacing.lg,
  },
  
  accordionCard: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  
  accordionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  
  accordionTitle: {
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    flex: 1,
    paddingRight: tokens.spacing.sm,
  },
  
  accordionContent: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.relaxed,
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
