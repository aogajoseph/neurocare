import { ResizeMode, Video } from 'expo-av';
import { Stack, useRouter } from 'expo-router';
import { ChevronLeft } from 'lucide-react-native';
import React from 'react';
import {
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import { resources } from '@/demo/resources';
import { tokens } from '@/theme/design-tokens';

const videoSources: Record<string, any> = {
  't-1': require('assets/videos/neurology_qa.mp4'),
  't-2': require('assets/videos/mental_health.mp4'),
};

export default function TalksScreen() {
  const router = useRouter();

  const talksResource = resources.find((r) => r.slug === 'talks');

  if (!talksResource) {
    return (
      <View style={styles.center}>
        <Text>Talks resource not found.</Text>
      </View>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Talks',
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
      
      <ScrollView contentContainerStyle={styles.container}>
        {/* Title + Subtitle from backend */}
        <Text style={styles.title}>{talksResource.title.en}</Text>
        <Text style={styles.subtitle}>{talksResource.subtitle.en}</Text>

        {/* Video Items */}
        {talksResource.items.map((item) => {
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
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: tokens.spacing.lg,
    backgroundColor: tokens.colors.surface.background,
  },
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: tokens.spacing.xl,
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