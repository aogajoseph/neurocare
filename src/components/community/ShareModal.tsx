// src/components/community/ShareModal.tsx
import React from 'react';
import { View, Text, Pressable, StyleSheet, Share, Platform } from 'react-native';
import { tokens } from '@/theme/design-tokens';

type Props = {
  visible: boolean;
  message: string;
  link: string;
  onClose: () => void;
  language?: 'en' | 'sw';
};

export default function ShareModal({ visible, message, link, onClose, language = 'en' }: Props) {
  if (!visible) return null;

  const handleCopyOrShare = async () => {
    try {
      if (Platform.OS === 'web') {
        await navigator.clipboard.writeText(message, link);
        alert(language === 'sw' ? 'Linki imenakiliwa' : 'Link copied');
        return;
      }

      await Share.share({ message, link });
    } catch (err) {
      console.error('Share error', err);
    }
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.container}>
        <Text style={styles.title}>{language === 'sw' ? 'Shiriki Space Hii' : 'Share this Space'}</Text>
        <Text style={styles.message}>{message}</Text>
        <Text style={styles.link}>{link}</Text>

        <Pressable style={styles.button} onPress={handleCopyOrShare}>
          <Text style={styles.buttonText}>{language === 'sw' ? 'Shiriki / Nakili' : 'Share / Copy'}</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={onClose}>
          <Text style={styles.buttonText}>{language === 'sw' ? 'Funga' : 'Close'}</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  overlay: { 
    ...StyleSheet.absoluteFillObject, 
    backgroundColor: 'rgba(0,0,0,0.5)', 
    justifyContent: 'center', 
    padding: tokens.spacing.lg 
  },
  container: { 
    backgroundColor: tokens.colors.surface.card, 
    borderRadius: tokens.radius.lg, 
    padding: tokens.spacing.md 
  },
  title: { 
    fontSize: tokens.typography.size.lg, 
    fontWeight: tokens.typography.weight.bold, 
    marginBottom: tokens.spacing.sm, 
    color: tokens.colors.text.primary 
  },
  message: { 
    fontSize: tokens.typography.size.md, 
    marginBottom: tokens.spacing.md, 
    color: tokens.colors.text.primary 
  },
  button: { 
    padding: tokens.spacing.md, 
    backgroundColor: tokens.colors.brand.primary, 
    borderRadius: tokens.radius.md, 
    marginBottom: tokens.spacing.sm, 
    alignItems: 'center' 
  },
  buttonText: { 
    color: tokens.colors.text.inverse, 
    fontWeight: tokens.typography.weight.semibold 
  },
  link: {
    color: tokens.colors.brand.link,
    alignment: tokens.alignment.text.center,
  },
});
