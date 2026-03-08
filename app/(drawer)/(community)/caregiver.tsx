import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useRouter, Stack } from 'expo-router';

import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function CaregiverSpacesScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Caregiver Spaces',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ paddingRight: 12 }}>
              <Ionicons name="chevron-back" size={24} />
            </Pressable>
          ),
        }}
      />

      <RoleSpacesScreen
        role="caregiver"
        title={{
          en: 'Caregiver Spaces',
          sw: 'Nafasi za Walezi',
        }}
        subtitle={{
          en: 'Join spaces designed to support your caregiving journey',
          sw: 'Jiunge na nafasi zilizoundwa kukuunga mkono katika safari ya ulezi',
        }}
        baseRoute="/(drawer)/(community)/caregiver"
      />
    </>
  );
}