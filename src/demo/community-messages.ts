// src/demo/community-messages.ts
import { demoUsers } from './users';

export type CommunityMessage = {
  id: string;
  spaceId: string;
  author: {
    id: string;
    name: string;
    role?: 'caregiver' | 'professional' | 'moderator';
    profileImage?: string; // avatar
  };
  content: {
    en: string;
    sw: string;
  };
  createdAt: string;
};

// helper to get demo user data
const getUser = (username: string) => {
  const user = demoUsers.find((u) => u.username === username);
  if (!user) return { id: username, name: username, profileImage: '/assets/default-avatar.png' };
  return { id: user.username, name: user.name, profileImage: user.profileImage };
};

// simulate conversation
export const communityMessages: CommunityMessage[] = [
  // Moderator welcome
  {
    id: 'cg-1',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator1',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Welcome to Caregiver Guidance & Counselling. Feel free to share, reflect, and ask questions.',
      sw: 'Karibu kwenye Mwongozo na Ushauri kwa Walezi. Hisi uhuru kushirikiana, kutafakari, na kuuliza maswali.',
    },
    createdAt: '2026-01-01T08:00:00Z',
  },

  // Caregiver 1
  {
    id: 'cg-2',
    spaceId: 'caregiver-guidance',
    author: getUser('Mercyline'),
    content: {
      en: 'Some days feel heavier than others. Just being here today feels like a small win.',
      sw: 'Siku zingine huhisi kuwa nzito zaidi. Kuwa hapa leo peke yake ni ushindi mdogo kwangu.',
    },
    createdAt: '2026-01-01T08:12:00Z',
  },

  // Caregiver 2
  {
    id: 'cg-3',
    spaceId: 'caregiver-guidance',
    author: getUser('Winfred'),
    content: {
      en: 'You’re not alone, Mary. I’ve learned to take things one hour at a time.',
      sw: 'Huko peke yako, Mary. Nimejifunza kuchukua mambo saa moja kwa wakati.',
    },
    createdAt: '2026-01-01T08:18:00Z',
  },

  // Professional advice
  {
    id: 'cg-4',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'p1',
      name: 'Grace',
      role: 'professional',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'It’s okay to feel overwhelmed. Remember, caring for yourself is part of caring for others.',
      sw: 'Ni sawa kujihisi umelemewa. Kumbuka, kujijali ni sehemu ya kuwajali wengine.',
    },
    createdAt: '2026-01-01T08:30:00Z',
  },

  // Moderator checking in
  {
    id: 'cg-5',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator1',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Reminder: take breaks and breathe. You’re doing a great job!',
      sw: 'Kumbuka: pumzika na pika pumzi. Unaendelea vizuri sana!',
    },
    createdAt: '2026-01-01T08:45:00Z',
  },

  // Caregiver 1 responds
  {
    id: 'cg-6',
    spaceId: 'caregiver-guidance',
    author: getUser('Judith'),
    content: {
      en: 'Thanks, I really needed that reminder.',
      sw: 'Asante, nilihitaji kumbuka hilo kweli.',
    },
    createdAt: '2026-01-01T08:50:00Z',
  },

  // Caregiver 2
  {
    id: 'cg-7',
    spaceId: 'caregiver-guidance',
    author: getUser('Joseph'),
    content: {
      en: 'I also try short walks in the garden when it gets overwhelming.',
      sw: 'Mimi pia najaribu matembezi mafupi bustanini ninapohisi kulemewa.',
    },
    createdAt: '2026-01-01T08:55:00Z',
  },

  // Moderator closing
  {
    id: 'cg-8',
    spaceId: 'caregiver-guidance',
    author: {
      id: 'moderator1',
      name: 'Dr. Anne Sambuli',
      role: 'moderator',
      profileImage: '/assets/default-avatar.png',
    },
    content: {
      en: 'Keep sharing and supporting each other. Remember, this space is for all caregivers!',
      sw: 'Endeleeni kushirikiana na kusaidia kila mmoja. Kumbuka, nafasi hii ni kwa walezi wote!',
    },
    createdAt: '2026-01-01T09:00:00Z',
  },
];
