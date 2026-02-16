import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function ProfessionalSpaceScreen() {
  return (
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
  );
}
