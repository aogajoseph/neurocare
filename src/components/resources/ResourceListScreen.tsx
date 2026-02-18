// src/components/resources/ResourceListScreen.tsx

import { View, Text, StyleSheet, ScrollView, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';

type ResourceItem = {
  id: string;
  title: string;
  subtitle?: string;
  onPress?: () => void;
};

type Props = {
  title: string;
  items: ResourceItem[];
  emptyMessage?: string;
};

export default function ResourceListScreen({
  title,
  items,
  emptyMessage = 'No resources available.',
}: Props) {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Pressable onPress={() => router.back()}>
          <Ionicons
            name="arrow-back"
            size={22}
            color={tokens.colors.text.primary}
          />
        </Pressable>

        <Text style={styles.headerTitle}>{title}</Text>
      </View>

      {/* Content */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}
      >
        {items.length === 0 ? (
          <Text style={styles.empty}>{emptyMessage}</Text>
        ) : (
          items.map((item) => (
            <Pressable
              key={item.id}
              style={({ pressed }) => [
                styles.card,
                pressed && styles.cardPressed,
              ]}
              onPress={item.onPress}
            >
              <Text style={styles.cardTitle}>{item.title}</Text>

              {item.subtitle ? (
                <Text style={styles.cardSubtitle}>{item.subtitle}</Text>
              ) : null}
            </Pressable>
          ))
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },

  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: tokens.spacing.md,
    paddingHorizontal: tokens.spacing.xl,
    paddingTop: tokens.spacing.xl,
    paddingBottom: tokens.spacing.lg,
  },

  headerTitle: {
    fontSize: tokens.typography.size.lg,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },

  content: {
    paddingHorizontal: tokens.spacing.xl,
    paddingBottom: tokens.spacing.xxl,
  },

  card: {
    backgroundColor: tokens.colors.surface.card,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
    marginBottom: tokens.spacing.md,
    ...tokens.elevation.card,
  },

  cardPressed: {
    backgroundColor: tokens.colors.surface.soft,
  },

  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  cardSubtitle: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
  },

  empty: {
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.muted,
    marginTop: tokens.spacing.lg,
  },
});
