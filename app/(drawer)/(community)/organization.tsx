import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function OrganizationSpacesScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Organization Spaces',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ paddingRight: 12 }}>
              <Ionicons name="chevron-back" size={24} />
            </Pressable>
          ),
        }}
      />

      <RoleSpacesScreen
        role="organization"
        title={{
          en: 'Organization Spaces',
          sw: 'Nafasi za Mashirika',
        }}
        subtitle={{
          en: 'Collaborate, share programs, and connect with the Neuro Care community',
          sw: 'Shirikiana, gawana programu, na ungana na jamii ya Neuro Care',
        }}
        baseRoute="/(drawer)/(community)/organization"
      />
    </>
  );
}
