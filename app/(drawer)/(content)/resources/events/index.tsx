import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { Platform } from 'react-native';
import { Video, ResizeMode } from 'expo-av';
import { useRouter } from 'expo-router';

import { resources } from '@/demo/resources';
import { tokens } from '@/theme/design-tokens';

const videoSources: Record<string, any> = {
  'e-1': require('../../../../../assets/videos/neuro_awards.mp4'),
  'e-2': require('../../../../../assets/videos/sbh_day.mp4'),
};

export default function EventsScreen() {
  const router = useRouter();

  const eventsResource = resources.find((r) => r.slug === 'events');

  if (!eventsResource) {
    return (
      <View style={styles.center}>
        <Text>Events resource not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Back Button */}
      <TouchableOpacity onPress={() => router.back()}>
        <Text style={styles.back}>← Back</Text>
      </TouchableOpacity>

      {/* Title + Subtitle from backend */}
      <Text style={styles.title}>{eventsResource.title.en}</Text>
      <Text style={styles.subtitle}>{eventsResource.subtitle.en}</Text>

      {/* Video Items */}
      {eventsResource.items.map((item) => {
        const source = videoSources[item.id];

        return (
          <View key={item.id} style={styles.card}>
            {source ? (
              Platform.OS === 'web' ? (
                <video
                  src={source}
                  controls
                  style={{
                    width: '100%',
                    borderRadius: 12,
                    marginTop: 8,
                  }}
                />
              ) : (
                <Video
                  source={source}
                  style={{
                    width: '100%',
                    aspectRatio: 16 / 9,
                    borderRadius: 12,
                    backgroundColor: '#000',
                    marginTop: 8,
                  }}
                  useNativeControls
                  resizeMode={ResizeMode.CONTAIN}
                  shouldPlay={false}
                  isLooping={false}
                />
              )
            ) : (
              <Text style={styles.missing}>
                Video file not found for {item.id}
              </Text>
            )}

            <Text style={styles.cardTitle}>{item.title}</Text>
            <Text style={styles.cardDescription}>
              {item.description}
            </Text>
            <Text style={styles.eventDate}>{item.date}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
    padding: 20,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
  },
  back: {
    marginBottom: 12,
    fontSize: tokens.typography.size.sm,
    fontWeight: tokens.typography.weight.bold,
    color: tokens.colors.primary,
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
    flex: 1,
    paddingRight: tokens.spacing.sm,
    marginTop: 6,
  },
  cardDescription: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    color: tokens.colors.text.secondary,
    marginTop: 4,
  },
  eventDate: {
    marginTop: tokens.spacing.sm,
    fontSize: tokens.typography.size.sm,
    fontStyle: tokens.typography.style.italic,
    color: tokens.colors.text.secondary,
    marginTop: 4,
  },
  video: {
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: tokens.radius.md,
    backgroundColor: tokens.colors.surface.subtle,
  },
  missing: {
    fontSize: tokens.typography.size.sm,
    color: 'red',
  },
});