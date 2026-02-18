import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function OrganizationSpacesScreen() {
  return (
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
  );
}
