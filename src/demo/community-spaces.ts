export type CommunityRoleKey =
  | 'caregiver'
  | 'pwd'
  | 'professional'
  | 'organization'
  | 'corporate'
  | 'visitor';

export type CommunitySpace = {
  id: string;
  role: CommunityRoleKey;
  category: {
    en: string;
    sw: string;
  };
  title: {
    en: string;
    sw: string;
  };
  description: {
    en: string;
    sw: string;
  };
};

export const communitySpaces: CommunitySpace[] = [
  /**
   * 🧭 Guidance & Counselling
   */
  {
    id: 'caregiver-guidance',
    role: 'caregiver',
    category: {
      en: 'Guidance & Counselling',
      sw: 'Mwongozo na Ushauri',
    },
    title: {
      en: 'Caregiver Guidance & Counselling',
      sw: 'Mwongozo na Ushauri kwa Walezi',
    },
    description: {
      en: 'Emotional support, counselling and guided conversations to help caregivers cope, reflect and regain balance.',
      sw: 'Msaada wa kihisia, ushauri na mazungumzo yanayoongozwa kusaidia walezi kukabiliana na changamoto na kurejesha utulivu.',
    },
    members: 236,
  },

  /**
   * 🧠 Understanding Conditions & Care
   */
  {
    id: 'understanding-conditions',
    role: 'caregiver',
    category: {
      en: 'Understanding Care',
      sw: 'Kuelewa Huduma',
    },
    title: {
      en: 'Understanding Neurological Care',
      sw: 'Kuelewa Huduma za Kineurolojia',
    },
    description: {
      en: 'Plain-language explanations of neurological conditions, what to expect and how to navigate care confidently.',
      sw: 'Maelezo rahisi kuhusu hali za kinyurolojia, nini cha kutarajia na jinsi ya kutoa huduma kwa ujasiri.',
    },
    members: 123,
  },
  {
    id: 'caregiving-basics',
    role: 'caregiver',
    category: {
      en: 'Understanding Care',
      sw: 'Kuelewa Huduma',
    },
    title: {
      en: 'Caregiving Basics',
      sw: 'Misingi ya Ulezi',
    },
    description: {
      en: 'Daily care routines, safety tips, medication reminders and practical caregiving fundamentals.',
      sw: 'Ratiba za kila siku, vidokezo vya usalama, kumbukumbu za dawa na misingi ya ulezi wa vitendo.',
    },
    members: 106,
  },

  /**
   * 🤝 Peer Support
   */
  {
    id: 'caregiver-peer-support',
    role: 'caregiver',
    category: {
      en: 'Peer Support',
      sw: 'Msaada wa Kijamii',
    },
    title: {
      en: 'Caregivers’ Peer Circle',
      sw: 'Mduara wa Walezi',
    },
    description: {
      en: 'Connect with other caregivers to share experiences, challenges, encouragement and small wins.',
      sw: 'Ungana na walezi wengine kushirikiana uzoefu, changamoto, faraja na mafanikio madogo.',
    },
    members: 218,
  },

  /**
   * 🧰 Practical Help & Resources
   */
  {
    id: 'care-resources',
    role: 'caregiver',
    category: {
      en: 'Resources & Support',
      sw: 'Rasilimali na Msaada',
    },
    title: {
      en: 'Care Resources & Services',
      sw: 'Rasilimali na Huduma za Ulezi',
    },
    description: {
      en: 'Information on clinics, therapists, NGOs and community services that support caregivers and families.',
      sw: 'Taarifa kuhusu kliniki, wataalamu, mashirika na huduma za jamii zinazosaidia walezi na familia.',
    },
    members: 114,
  },
  {
    id: 'assistive-tools',
    role: 'caregiver',
    category: {
      en: 'Resources & Support',
      sw: 'Rasilimali na Msaada',
    },
    title: {
      en: 'Assistive Tools & Daily Living Tips',
      sw: 'Vifaa Saidizi na Vidokezo vya Maisha ya Kila Siku',
    },
    description: {
      en: 'Tools, devices and practical tips that make daily caregiving safer and more manageable.',
      sw: 'Vifaa, mbinu na vidokezo vinavyorahisisha na kuboresha ulezi wa kila siku.',
    },
    members: 163,
  },

  /**
   * 🧑‍⚕️ Ask a Professional
   */
  {
    id: 'ask-a-professional',
    role: 'caregiver',
    category: {
      en: 'Professional Support',
      sw: 'Msaada wa Kitaalamu',
    },
    title: {
      en: 'Ask a Health Professional',
      sw: 'Uliza Mtaalamu wa Afya',
    },
    description: {
      en: 'Moderated Q&A sessions with a health professional for trusted guidance and clarity.',
      sw: 'Maswali na majibu yanayoongozwa na mtaalamu wa afya kwa mwongozo wa kuaminika na ufafanuzi.',
    },
    members: 275,
  },

  /**
   * 🌱 Caregiver Wellbeing
   */
  {
    id: 'caregiver-wellbeing',
    role: 'caregiver',
    category: {
      en: 'Caregiver Wellbeing',
      sw: 'Ustawi wa Mlezi',
    },
    title: {
      en: 'Caring for the Caregiver',
      sw: 'Kujali Mlezi',
    },
    description: {
      en: 'A space focused on rest, boundaries, identity and mental wellbeing for caregivers.',
      sw: 'Eneo linalolenga mapumziko, mipaka, utambulisho na afya ya akili ya walezi.',
    },
    members: 185,
  },
];
