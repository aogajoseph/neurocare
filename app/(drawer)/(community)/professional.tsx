import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import { Pressable } from 'react-native';
import { useRouter } from 'expo-router';

import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function ProfessionalSpaceScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen
        options={{
          title: 'Health Professionals Spaces',
          headerLeft: () => (
            <Pressable onPress={() => router.back()} style={{ paddingRight: 12 }}>
              <Ionicons name="chevron-back" size={24} />
            </Pressable>
          ),
        }}
      />

      <RoleSpacesScreen
        role="professional"
        title={{
          en: 'Health Professionals Spaces',
          sw: 'Nafasi za Wataalamu wa Afya',
        }}
        subtitle={{
          en: 'Connect with others, learn, and share professional insights.',
          sw: 'Ungana na wengine, jifunze, na shiriki mawaidha ya kitaalamu.',
        }}
        baseRoute="/(drawer)/(community)/professional"
      />
    </>
  );
}
