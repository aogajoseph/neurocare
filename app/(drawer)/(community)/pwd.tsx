import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function PWDSpaceScreen() {
  return (
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
  );
}
