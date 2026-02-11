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
];
