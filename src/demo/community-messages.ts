// src/demo/community-messages.ts

export type CommunityMessage = {
  id: string;
  spaceId: string;
  author: {
    id: string;
    name: string;
    role: 'caregiver' | 'moderator';
    profileImage: string;
  };
  content: {
    en: string;
    sw: string;
  };
  createdAt: string;
};

/*
|--------------------------------------------------------------------------
| Caregiver Guidance & Counselling – Demo Messages
|--------------------------------------------------------------------------
*/

export const communityMessages: CommunityMessage[] = [
  {
    id: 'cg-1',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Caregiver Guidance & Counselling. This is a safe space to share, reflect, and support one another.',
      sw: 'Karibu kwenye Mwongozo na Ushauri kwa Walezi. Hii ni nafasi salama ya kushirikiana, kutafakari, na kusaidiana.',
    },
    createdAt: '2026-01-01T08:00:00Z',
  },

  {
    id: 'cg-2',
    spaceId: 'caregiver-guidance',
    author: {
        id: 'caregiver-mercyline',
      name: 'Mercyline',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Some days feel heavier than others. Just being here today feels like a small win.',
      sw: 'Siku zingine huhisi kuwa nzito zaidi. Kuwa hapa leo peke yake ni ushindi mdogo kwangu.',
    },
    createdAt: '2026-08-01T08:12:00Z',
  },

  {
    id: 'cg-3',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-winfred',
      name: 'Winfred',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'You’re not alone, Mercyline. I’ve learned to take things one hour at a time.',
      sw: 'Huko peke yako, Mercyline. Nimejifunza kuchukua mambo saa moja kwa wakati.',
    },
    createdAt: '2026-08-01T08:18:00Z',
  },

  {
    id: 'cg-4',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Thank you for sharing. Feeling overwhelmed is very common, and it’s okay to acknowledge it.',
      sw: 'Asanteni kwa kushirikiana. Kujihisi umelemewa ni jambo la kawaida, na ni sawa kukubali hisia hizo.',
    },
    createdAt: '2026-09-01T08:30:00Z',
  },

  {
    id: 'cg-5',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-judith',
      name: 'Judith',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'I sometimes step outside for a few minutes just to breathe. It helps a bit.',
      sw: 'Wakati mwingine hutoka nje kwa dakika chache kupumua tu. Hunisaidia kidogo.',
    },
    createdAt: '2026-10-01T08:42:00Z',
  },

  {
    id: 'cg-6',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'caregiver-joseph',
      name: 'Joseph',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Short walks in the garden have helped me when things feel overwhelming.',
      sw: 'Matembezi mafupi bustanini yamenisaidia ninapohisi kulemewa.',
    },
    createdAt: '2026-10-01T08:55:00Z',
  },

  {
    id: 'cg-7',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator-anne',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'These are wonderful coping strategies. Please remember to be kind to yourselves.',
      sw: 'Hizi ni njia nzuri sana za kujikabili. Tafadhali kumbukeni kujionea huruma.',
    },
    createdAt: '2026-10-01T09:05:00Z',
  },
];
