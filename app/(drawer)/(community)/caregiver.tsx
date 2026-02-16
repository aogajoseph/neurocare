import RoleSpacesScreen from '@/components/community/RoleSpacesScreen';

export default function CaregiverSpacesScreen() {
  return (
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
  );
}
