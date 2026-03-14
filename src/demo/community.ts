export type CommunityRoleKey =
  | 'caregiver'
  | 'pwd' // Person With Disability
  | 'professional'
  | 'organization'
  | 'corporate'
  | 'visitor';

export const communityRoles = [
  {
    key: 'caregiver' as CommunityRoleKey,
    title: {
      en: 'Caregiver / Family Member',
      sw: 'Mlezi / Mwanafamilia',
    },
  },
  {
    key: 'pwd' as CommunityRoleKey,
    title: {
      en: 'Living with a Condition',
      sw: 'Anaishi na Hali Fulani',
    },
  },
  {
    key: 'professional' as CommunityRoleKey,
    title: {
      en: 'Health Professional',
      sw: 'Mtaalamu wa Afya',
    },
  },
  // {
  //   key: 'corporate' as CommunityRoleKey,
  //   title: {
  //     en: 'Corporate Partner',
  //     sw: 'Mshirika wa Kibiashara',
  //   },
  // },
  // {
  //   key: 'organization' as CommunityRoleKey,
  //   title: {
  //     en: 'Organization',
  //     sw: 'Shirika',
  //   },
  // },
  // {
  //   key: 'visitor' as CommunityRoleKey,
  //   title: {
  //     en: 'Just Looking',
  //     sw: 'Natazama Tu',
  //   },
  // },
];

export const communityReassurance = {
  message: {
    en: 'You can belong to multiple spaces and switch how you engage at any time.',
    sw: 'Unaweza kushiriki katika makundi tofauti na kubadilisha namna unavyoshiriki wakati wowote.',
  },
};