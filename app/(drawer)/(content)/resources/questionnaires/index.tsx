import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { router, Stack } from 'expo-router'; 
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ChevronLeft } from 'lucide-react-native';

import { resources } from '@/demo/resources';
import { tokens } from '@/theme/design-tokens';


export default function QuestionnairesScreen() {
  const insets = useSafeAreaInsets();
  const questionnairesResource = resources.find(
    (r) => r.slug === 'questionnaires'
  );

  if (!questionnairesResource) {
    return (
      <View style={styles.center}>
        <Stack.Screen options={{ title: 'Resources', headerShown: true }} />
        <Text>Questionnaires resource not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.flex}>
      <Stack.Screen
        options={{
          title: 'Questionnaires',
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

      <ScrollView 
        contentContainerStyle={[
          styles.container,
          { paddingBottom: Math.max(insets.bottom, insets.top, tokens.spacing.xl) }
        ]}
      >
        <Text style={styles.title}>
          {questionnairesResource.title.en}
        </Text>

        <Text style={styles.subtitle}>
          {questionnairesResource.subtitle.en}
        </Text>

        {questionnairesResource.items.map((item) => (
          <TouchableOpacity
            key={item.id}
            style={styles.card}
            onPress={() => 
              router.push(`/resources/questionnaires/${item.slug}`)
            }
          >
            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>{item.description}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
    backgroundColor: tokens.colors.surface.background,
  },
  container: {
    flexGrow: 1,
    padding: tokens.spacing.lg,
  },
  title: {
    fontSize: tokens.typography.size.xxl,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.brand.primary,
    marginBottom: tokens.spacing.xs,
  },
  subtitle: {
    fontSize: tokens.typography.size.md,
    color: tokens.colors.text.muted,
    marginBottom: tokens.spacing.lg,
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
  card: {
    backgroundColor: tokens.colors.surface.card,
    borderRadius: tokens.radius.lg,
    padding: tokens.spacing.lg,
    marginBottom: tokens.spacing.md,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },
  cardTitle: {
    fontSize: tokens.typography.size.md,
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
  },
  cardDescription: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    lineHeight: tokens.typography.lineHeight.normal,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },
});
