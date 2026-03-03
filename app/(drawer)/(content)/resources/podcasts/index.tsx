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
  'p-1': require('../../../../../assets/videos/neuro_connect_intro.mp4'),
  'p-2': require('../../../../../assets/videos/neuro_connect_ep1.mp4'),
};

export default function PodcastsScreen() {
  const router = useRouter();

  const podcastsResource = resources.find((r) => r.slug === 'podcast');

  if (!podcastsResource) {
    return (
      <View style={styles.center}>
        <Text>Podcasts resource not found.</Text>
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
      <Text style={styles.title}>{podcastsResource.title.en}</Text>
      <Text style={styles.subtitle}>{podcastsResource.subtitle.en}</Text>

      {/* Video Items */}
      {podcastsResource.items.map((item) => {
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