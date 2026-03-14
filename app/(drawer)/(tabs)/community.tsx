import { View, Text, StyleSheet, Pressable, ScrollView, Alert } from 'react-native';
import { useRouter } from 'expo-router';
import { tokens } from '@/theme/design-tokens';
import { communityRoles, communityReassurance } from '@/demo/community';
import { useLanguage } from '@/i18n/LanguageContext';

export default function CommunityEntryScreen() {
  const router = useRouter();
  const { language } = useLanguage(); // 'en' | 'sw'

  const handleRolePress = (roleKey: string) => {
    switch (roleKey) {
      case 'caregiver':
        router.push('/(community)/caregiver'); // <- your existing caregiver.tsx
        break;
      case 'pwd':
        router.push('/(community)/pwd'); // <- your existing pwd.tsx
        break;
      case 'professional':
        router.push('/(community)/professional'); // <- your existing professional.tsx
        break;
      case 'organization':
        router.push('/(community)/organization'); // <- your existing organization.tsx
        break;
      default:
        Alert.alert(
          language === 'sw' ? 'Karibu Baadaye' : 'Coming Soon',
          language === 'sw'
            ? 'Sehemu hii bado haijajiandaa.'
            : 'This section is not ready yet.'
        );
    }
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.title}>
        {language === 'sw'
          ? 'Upo hapa kama nani leo?'
          : 'Who are you here as today?'}
      </Text>

      {/* Role Options */}
      <View style={styles.list}>
        {communityRoles.map((role) => (
          <Pressable
            key={role.key}
            onPress={() => handleRolePress(role.key)}
            style={({ pressed }) => [
              styles.card,
              pressed && styles.cardPressed,
            ]}
          >
            <Text style={styles.cardTitle}>
              {role.title[language]}
            </Text>
          </Pressable>
        ))}
      </View>

      {/* Reassurance Card */}
      <View style={styles.reassuranceCard}>
        <Text style={styles.reassuranceMessage}>
          {communityReassurance.message[language]}
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: tokens.spacing.xl,
    backgroundColor: tokens.colors.surface.background,
  },

  title: {
    fontSize: tokens.typography.size.xl,
    color: tokens.colors.brand.primary,
    textAlign: 'center',
    fontWeight: tokens.typography.weight.bold,
    marginBottom: tokens.spacing.xl,
  },

  list: {
    gap: tokens.spacing.md,
  },

  card: {
    backgroundColor: tokens.colors.surface.card,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },

  cardPressed: {
    backgroundColor: tokens.colors.surface.soft,
  },

  cardTitle: {
    fontSize: tokens.typography.size.lg,
    textAlign: 'center',
    fontWeight: tokens.typography.weight.semibold,
    color: tokens.colors.text.primary,
    marginBottom: tokens.spacing.xs,
  },

  reassuranceCard: {
    marginTop: tokens.spacing.xxl,
    padding: tokens.spacing.lg,
    borderRadius: tokens.radius.lg,
    backgroundColor: tokens.colors.brand.secondary,
    borderWidth: 1,
    borderColor: tokens.colors.border.subtle,
  },

  reassuranceMessage: {
    fontSize: tokens.typography.size.sm,
    fontStyle: tokens.typography.style.italic, 
    color: tokens.colors.text.inverse,
    textAlign: 'center',
    lineHeight: tokens.typography.lineHeight.relaxed,
  },
});
