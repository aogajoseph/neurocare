import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function PWDSpaceScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'PWD Spaces',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ paddingRight: 12 }}>
              <Ionicons name="chevron-back" size={24} />
            </Pressable>
          ),
        }}
      />

      <RoleSpacesScreen
        role="pwd"
        title={{
          en: 'PWD Spaces',
          sw: 'Nafasi za Wanaoishi na Hali',
        }}
        subtitle={{
          en: 'Connect with others, learn, and share lived experiences',
          sw: 'Ungana na wengine, jifunze, na shiriki uzoefu wa maisha',
        }}
        baseRoute="/(drawer)/(community)/pwd"
      />
    </>
  );
}
