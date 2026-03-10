import { 
  ScrollView, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StyleSheet 
} from 'react-native';
import { useLocalSearchParams, router, Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { livingData } from '@/demo/living';
import { useLanguage } from '@/i18n/LanguageContext';
import { tokens } from '@/theme/design-tokens';

/* ─────────────────────────────────────────────
   UI BLOCK CONTRACT
───────────────────────────────────────────── */

type Localized = {
  en: string;
  sw: string;
};

type UIBlock =
  | { type: 'text'; title: Localized; content: Localized }
  | { type: 'bullets'; title: Localized; items: string[] }
  | {
      type: 'related';
      title: Localized;
      items: { slug: string; label: Localized }[];
    }
  | { type: 'reassurance'; content: Localized };

/* ─────────────────────────────────────────────
   NORMALIZER
───────────────────────────────────────────── */

function buildBlocks(sections: any, lang: 'en' | 'sw'): UIBlock[] {
  if (!sections) return [];

  const blocks: UIBlock[] = [];

  if (sections.whyItMatters) {
    blocks.push({
      type: 'text',
      title: sections.whyItMatters.title,
      content: sections.whyItMatters.content,
    });
  }

  if (sections.tips) {
    blocks.push({
      type: 'bullets',
      title: sections.tips.title,
      items: sections.tips.bullets?.[lang] ?? [],
    });
  }

  if (sections.challenges) {
    blocks.push({
      type: 'text',
      title: sections.challenges.title,
      content: sections.challenges.content,
    });
  }

  if (sections.relatedTopics?.length) {
    blocks.push({
      type: 'related',
      title: { en: 'Related Topics', sw: 'Mada Zinazohusiana' },
      items: sections.relatedTopics,
    });
  }

  if (sections.reassurance) {
    blocks.push({
      type: 'reassurance',
      content: sections.reassurance,
    });
  }

  return blocks;
}

/* ─────────────────────────────────────────────
   SCREEN
───────────────────────────────────────────── */

export default function LivingDetailScreenWrapper() {
  const { slug } = useLocalSearchParams<{ slug: string }>();
  const { language } = useLanguage();

  // Find the card for this slug
  const section = livingData.sections.find(s => s.type === 'cardList');
  const card = section?.cards.find(c => c.slug === slug);

  if (!card) return null; // fallback can be handled in content

  return (
    <>
      <Stack.Screen
        options={{
          title: card.title[language], 
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

      {/* Screen Content */}
      <ScrollView
        contentContainerStyle={[styles.scroll, { paddingBottom: 24 }]}
        showsVerticalScrollIndicator={false}
      >
        {card.bannerImage && (
          <Image source={card.bannerImage} style={styles.banner} />
        )}

        <View style={styles.header}>
          <View style={styles.headerRow}>
            <Ionicons
              name={card.icon}
              size={24}
              color={tokens.colors.brand.primary}
            />
            <Text style={styles.title}>{card.title[language]}</Text>
          </View>

          <Text style={styles.description}>{card.description[language]}</Text>
        </View>

        <View style={styles.blocks}>
          {buildBlocks(card.sections, language).map((block, index) => {
            switch (block.type) {
              case 'text':
                return (
                  <View key={index}>
                    <Text style={styles.blockTitle}>{block.title[language]}</Text>
                    <Text style={styles.body}>{block.content[language]}</Text>
                  </View>
                );

              case 'bullets':
                return (
                  <View key={index}>
                    <Text style={styles.blockTitle}>{block.title[language]}</Text>
                    <View style={styles.bullets}>
                      {block.items.map((item, i) => (
                        <Text key={i} style={styles.body}>• {item}</Text>
                      ))}
                    </View>
                  </View>
                );

              case 'related':
                return (
                  <View key={index}>
                    <Text style={styles.blockTitle}>{block.title[language]}</Text>
                    <View style={styles.related}>
                      {block.items.map(item => (
                        <TouchableOpacity
                          key={item.slug}
                          style={styles.linkRow}
                          onPress={() => router.push(`/learn/living/${item.slug}`)}
                          activeOpacity={0.7}
                        >
                          <View style={styles.linkInline}>
                            <Text style={styles.link}>{item.label[language]}</Text>
                            <Ionicons
                              name="arrow-forward-circle-outline"
                              size={16}
                              color={tokens.colors.brand.link}
                              style={{ marginLeft: tokens.spacing.xs }}
                            />
                          </View>
                        </TouchableOpacity>
                      ))}
                    </View>
                  </View>
                );

              case 'reassurance':
                return (
                  <View key={index} style={styles.reassurance}>
                    <Text style={styles.reassuranceText}>{block.content[language]}</Text>
                  </View>
                );

              default:
                return null;
            }
          })}
        </View>
      </ScrollView>
    </>
  );
}

/* ─────────────────────────────────────────────
   STYLES / TOKENS
───────────────────────────────────────────── */

const styles = StyleSheet.create({
  scroll: {
    paddingBottom: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
  },

  banner: {
    width: '100%',
    height: 220,
  },

  header: {
    padding: tokens.spacing.lg,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.sm,
  },

  title: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },

  description: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  blocks: {
    paddingHorizontal: tokens.spacing.lg,
    gap: tokens.spacing.xl,
  },

  blockTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
  },

  body: {
    marginTop: tokens.spacing.xs,
    fontSize: tokens.typography.size.sm,
    lineHeight: tokens.typography.lineHeight.normal,
    color: tokens.colors.text.secondary,
  },

  bullets: {
    marginTop: tokens.spacing.xs,
    gap: tokens.spacing.xs,
  },

  related: {
    marginTop: tokens.spacing.sm,
    gap: tokens.spacing.sm,
  },

  linkRow: {
    marginBottom: tokens.spacing.sm,
  },
  
  linkInline: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  
  linkIcon: {
    marginLeft: tokens.spacing.xs,
  },
  
  link: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.brand.link,
  },
  
  reassurance: {
    backgroundColor: tokens.colors.brand.secondary,
    padding: tokens.spacing.md,
    borderRadius: tokens.radius.md,
    marginBottom: tokens.spacing.xxl,
  },

  reassuranceText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.inverse,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeight.normal,
    fontStyle: 'italic',
  },

  fallback: {
    padding: tokens.spacing.lg,
  },

  fallbackText: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
  },
});
