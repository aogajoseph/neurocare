// app/(drawer)/(content)/conditions/[slug].tsx
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, Stack } from 'expo-router';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useState } from 'react';

import { useLanguage } from '@/i18n/LanguageContext';
import { conditionsData } from '@/demo/conditions';
import { tokens } from '@/theme/design-tokens';

type SectionKey = 'overview' | 'symptoms' | 'help';

export default function ConditionDetailScreen() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { language } = useLanguage();
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState<SectionKey>('overview');

  const data = slug ? conditionsData[slug] : null;

  if (!data) {
    return (
      <View style={styles.missingContainer}>
        <Text style={styles.missingText}>
          Content for this condition is coming soon.
        </Text>
      </View>
    );
  }

  const tabs: { key: SectionKey; label: string }[] = [
    { key: 'overview', label: language === 'sw' ? 'Muhtasari' : 'Overview' },
    { key: 'symptoms', label: language === 'sw' ? 'Dalili' : 'Symptoms' },
    { key: 'help', label: language === 'sw' ? 'Msaada' : 'Help' },
  ];

  return (
    <>
      <Stack.Screen options={{ title: data.hero.title[language] }} />

      {/* Hero */}
      <View style={[styles.hero, { paddingTop: insets.top + tokens.spacing.lg }]}>
        <Text style={styles.title}>{data.hero.title[language]}</Text>
        <Text style={styles.subtitle}>{data.hero.subtitle[language]}</Text>
      </View>

      {/* Tabs */}
      <View style={styles.chips}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab.key}
            style={[
              styles.chip,
              activeTab === tab.key && styles.chipActive,
            ]}
            onPress={() => setActiveTab(tab.key)}
            activeOpacity={0.8}
          >
            <Text
              style={[
                styles.chipText,
                activeTab === tab.key && styles.chipTextActive,
              ]}
            >
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Active Section */}
      <ScrollView
        contentContainerStyle={{
          paddingBottom: insets.bottom + tokens.spacing.xl,
          paddingHorizontal: tokens.spacing.lg,
        }}
        showsVerticalScrollIndicator={false}
      >
        {activeTab === 'overview' && (
          <View>
            <SectionTitle title={language === 'sw' ? 'Muhtasari' : 'Overview'} />
            <Text style={styles.paragraph}>{data.sections.overview.content[language]}</Text>
          </View>
        )}

        {activeTab === 'symptoms' && (
          <View>
            <SectionTitle title={language === 'sw' ? 'Dalili za Awali' : 'Early Symptoms'} />
            {data.sections.symptoms.early[language].map((item, idx) => (
              <Bullet key={`early-${idx}`} text={item} />
            ))}

            {data.sections.symptoms.other?.[language] && (
              <>
                <SectionTitle title={language === 'sw' ? 'Dalili Nyingine' : 'Other Symptoms'} />
                {data.sections.symptoms.other[language].map((item, idx) => (
                  <Bullet key={`other-${idx}`} text={item} />
                ))}
              </>
            )}
          </View>
        )}

        {activeTab === 'help' && (
          <View>
            <SectionTitle title={language === 'sw' ? 'Wakati wa Kutafuta Msaada' : 'When to Seek Help'} />
            {data.sections.help.whenToSeekHelp[language].map((item, idx) => (
              <Bullet key={`help-${idx}`} text={item} />
            ))}

            <View style={styles.reassurance}>
              <Text style={styles.reassuranceText}>{data.sections.help.reassurance[language]}</Text>
            </View>
          </View>
        )}
      </ScrollView>
    </>
  );
}

/* ───── Components ───── */
function SectionTitle({ title }: { title: string }) {
  return <Text style={styles.sectionTitle}>{title}</Text>;
}

function Bullet({ text }: { text: string }) {
  return <Text style={styles.bullet}>• {text}</Text>;
}

/* ───── Styles ───── */
const styles = StyleSheet.create({
  hero: { 
    marginBottom: tokens.spacing.lg, 
    paddingHorizontal: tokens.spacing.lg 
  },
  title: { 
    fontSize: tokens.typography.size.xl, 
    fontWeight: tokens.typography.weight.semibold, 
    color: tokens.colors.text.primary, 
    marginBottom: tokens.spacing.xs 
  },
  subtitle: { 
    fontSize: tokens.typography.size.sm, 
    lineHeight: tokens.typography.lineHeight.normal, 
    color: tokens.colors.text.secondary 
  },
  chips: { 
    flexDirection: 'row', 
    gap: tokens.spacing.sm, 
    marginBottom: tokens.spacing.md, 
    paddingHorizontal: tokens.spacing.lg 
  },
  chip: { 
    backgroundColor: tokens.colors.surface.soft, 
    paddingHorizontal: tokens.spacing.md, 
    paddingVertical: tokens.spacing.sm, 
    borderRadius: tokens.radius.full 
  },
  chipActive: { 
    backgroundColor: tokens.colors.brand.primary 
  },
  chipText: { 
    fontSize: tokens.typography.size.xs, 
    color: tokens.colors.brand.primary, 
    fontWeight: tokens.typography.weight.medium 
  },
  chipTextActive: { 
    color: tokens.colors.surface.background, 
    fontWeight: tokens.typography.weight.semibold 
  },
  sectionTitle: { 
    fontSize: tokens.typography.size.md, 
    fontWeight: tokens.typography.weight.semibold, 
    color: tokens.colors.brand.primary, 
    marginTop: tokens.spacing.lg, 
    marginBottom: tokens.spacing.sm 
  },
  paragraph: { 
    fontSize: tokens.typography.size.sm, 
    lineHeight: tokens.typography.lineHeight.normal, 
    color: tokens.colors.text.secondary 
  },
  bullet: { 
    fontSize: tokens.typography.size.sm, 
    lineHeight: tokens.typography.lineHeight.normal, 
    color: tokens.colors.text.secondary, 
    marginBottom: tokens.spacing.xs 
  },
  reassurance: { 
    marginTop: tokens.spacing.lg, 
    padding: tokens.spacing.md, 
    backgroundColor: tokens.colors.brand.secondary, 
    borderRadius: tokens.radius.md 
  },
  reassuranceText: { 
    fontSize: tokens.typography.size.sm, 
    lineHeight: tokens.typography.lineHeight.normal, 
    color: tokens.colors.text.inverse, 
    textAlign: 'center' 
  },
  missingContainer: { 
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  missingText: { 
    fontSize: tokens.typography.size.md, 
    color: tokens.colors.text.secondary 
  },
});
