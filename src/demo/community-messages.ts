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

  /*
  |--------------------------------------------------------------------------
  | Understanding Neurological Care – Demo Messages
  |--------------------------------------------------------------------------
  */

  {
    id: 'unc-1',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Understanding Neurological Care. This space focuses on learning, clarity and shared experiences around neurological conditions.',
      sw: 'Karibu kwenye Kuelewa Huduma ya Neurologia. Nafasi hii inalenga kujifunza, ufafanuzi na uzoefu wa pamoja kuhusu hali za neurologia.',
    },
    createdAt: '2026-02-10T09:00:00Z',
  },

  {
    id: 'unc-2',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-lucy',
      name: 'Lucy',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Can someone explain the difference between a neurologist and a neurosurgeon?',
      sw: 'Je, kuna mtu anaweza kueleza tofauti kati ya daktari wa neurologia na daktari wa upasuaji wa neva?',
    },
    createdAt: '2026-02-11T10:15:00Z',
  },

  {
    id: 'unc-3',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Great question, Lucy. A neurologist manages brain and nerve conditions medically, while a neurosurgeon performs surgical procedures involving the nervous system.',
      sw: 'Swali zuri, Lucy. Daktari wa neurologia hushughulikia hali za ubongo na neva kwa matibabu, wakati daktari wa upasuaji wa neva hufanya upasuaji wa mfumo wa neva.',
    },
    createdAt: '2026-02-11T10:22:00Z',
  },

  {
    id: 'unc-4',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-daniel',
      name: 'Daniel',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'My father was diagnosed with Parkinson’s. Is tremor always present?',
      sw: 'Baba yangu aligunduliwa na Parkinson. Je, mtetemeko huwa upo kila wakati?',
    },
    createdAt: '2026-02-13T07:40:00Z',
  },

  {
    id: 'unc-5',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Not always, Daniel. Parkinson’s can present differently. Some people experience rigidity or slowed movement without a noticeable tremor.',
      sw: 'Sio kila wakati, Daniel. Parkinson hujitokeza kwa namna tofauti. Wengine hupata ugumu wa misuli au mwendo wa polepole bila mtetemeko unaoonekana.',
    },
    createdAt: '2026-02-14T07:52:00Z',
  },

  {
    id: 'unc-6',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'caregiver-amina',
      name: 'Amina',
      role: 'caregiver',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Are seizures always a sign of epilepsy?',
      sw: 'Je, degedege huwa ishara ya kifafa kila wakati?',
    },
    createdAt: '2026-02-14T11:05:00Z',
  },

  {
    id: 'unc-7',
    spaceId: 'understanding-neuro-care',
    author: {
      id: 'moderator-anne',
      name: 'Prof. Amina Mohammed',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'No, Amina. Seizures can occur for many reasons such as fever, head injury, or metabolic disturbances. A proper evaluation is important.',
      sw: 'Hapana, Amina. Degedege zinaweza kutokea kwa sababu nyingi kama homa, jeraha la kichwa, au matatizo ya kimetaboliki. Tathmini sahihi ni muhimu.',
    },
    createdAt: '2026-02-14T11:18:00Z',
  },

];
