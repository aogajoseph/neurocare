export type CommunityMember = {
  id: string;
  name: string;
  role: 'moderator' | 'caregiver';
  avatar?: string;
};

export const communityMembers: CommunityMember[] = [
  {
    id: 'm1',
    name: 'Dr. Anne Sambuli',
    role: 'moderator',
  },
  {
    id: 'c1',
    name: 'Mercyline Nafula',
    role: 'caregiver',
  },
  {
    id: 'c2',
    name: 'Winfred Moraa',
    role: 'caregiver',
  },
  {
    id: 'c3',
    name: 'Judith Akeyo',
    role: 'caregiver',
  },
  {
    id: 'c4',
    name: 'Joseph Kamau',
    role: 'caregiver',
  },
  {
    id: 'c5',
    name: 'Jackline Jones',
    role: 'caregiver',
  },
  {
    id: 'm2',
    name: 'Prof. Amina Mohammed',
    role: 'moderator',
  },
  {
    id: 'c6',
    name: 'Lucy Jeruto',
    role: 'caregiver',
  },
  {
    id: 'c7',
    name: 'Daniel Wesonga',
    role: 'caregiver',
  },
  {
    id: 'c8',
    name: 'Amina Hassan',
    role: 'caregiver',
  },
  {
    id: 'c9',
    name: 'Gladys Kipkemboi',
    role: 'caregiver',
  },
  {
    id: 'c10',
    name: 'Mary Wangari',
    role: 'caregiver',
  },
  {
    id: 'm3',
    name: 'Dr. George Kisiangani',
    role: 'moderator',
  },
  {
    id: 'c11',
    name: 'Lorna Wambui',
    role: 'caregiver',
  },
  {
    id: 'c12',
    name: 'Diana Kwamboka',
    role: 'caregiver',
  },
  {
    id: 'c13',
    name: 'Caroline Waihego',
    role: 'caregiver',
  },
  {
    id: 'c14',
    name: 'Joshua Mwendwa',
    role: 'caregiver',
  },
  {
    id: 'c15',
    name: 'Felix Kibet',
    role: 'caregiver',
  },
];
