// app/(drawer)/(community)/_layout.tsx

import { Stack } from 'expo-router';
import { Pressable } from 'react-native';
import { ChevronLeft } from 'lucide-react-native';
import { tokens } from '@/theme/design-tokens';

export default function CommunityLayout() {
  return (
    <Stack
      screenOptions={({ navigation }) => ({
        headerBackTitleVisible: false,

        headerLeft: () =>
          navigation.canGoBack() ? (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ paddingRight: tokens.spacing.sm }}
            >
              <ChevronLeft
                size={24}
                color={tokens.colors.text.primary}
              />
            </Pressable>
          ) : null,
      })}
    />
  );
}