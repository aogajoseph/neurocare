export type CommunityRoleKey =
  | 'caregiver'
  | 'pwd'
  | 'professional'
  | 'organization'
  | 'corporate'
  | 'visitor';

export type SpaceEntryMode =
  | 'open'
  | 'request'
  | 'invite';

export type ModerationLevel =
  | 'light'
  | 'moderated'
  | 'strict';

export type CommunitySpace = {
  /** Identity */
  id: string;
  role: CommunityRoleKey;

  /** Discovery & grouping */
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

  aboutSpace: {
    en: string;
    sw: string;
  };

  /** Membership */
  memberCount: number;
  entryMode: SpaceEntryMode;

  /** Interaction capabilities */
  capabilities: {
    canPost: boolean;
    canReply: boolean;
    canReact: boolean;
    canUploadMedia: boolean;
  };

  /** Moderation & safety */
  moderation: {
    level: ModerationLevel;
    showGuidelines: boolean;
    escalationPath?: 'admin' | 'professional' | 'external';
  };

  /** System messages */
  systemMessages?: {
    welcome?: {
      en: string;
      sw: string;
    };
    rules?: {
      en: string;
      sw: string;
    };
    about?: {
      en: string;
      sw: string;
    };
    guidelines?: {
      en: string[];
      sw: string[];
    };    
    meta?: {
      createdBy?: string;
      moderators?: string[];
      createdon?: string;
    };    
    visuals?: {
      icon?: string;
      accentColor?: string;
    };
    
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
    aboutSpace: {
      en: 'This space was created to support caregivers navigating the emotional and practical challenges of caring for a loved one. It is a safe place to share experiences, seek guidance, reflect, and find encouragement from peers and professionals. It aims at helping caregivers cope, learn, and connect.',
      sw: 'Eneo hili limetengenezwa kusaidia walezi wanaokabiliana na changamoto za kihisia na za vitendo za kulea mpendwa. Ni mahali salama pa kushiriki uzoefu, kupata mwongozo, kutafakari, na kupata faraja kutoka kwa wenzao na wataalamu. Lina lengo la kusaidia walezi kukabiliana, kujifunza, na kuungana na wengine.',
    },
    memberCount: 236,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: false,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
    },
    systemMessages: {
      welcome: {
        en: 'You\'re not alone. Feel free to express yourself, connect with others and take what helps you.',
        sw: 'Hauko peke yako. Hisi huru kueleza hisia zako, kuungana na wengine, na kuchukua kinachokusaidia.',
      },
      rules: {
        en: [
          'Be kind and respectful to others.',
          'Do not give medical advice.',
          'This space is moderated to ensure safety.',
          'Share only what feels safe for you.',
          'Respect the privacy and confidentiality of others.',
        ],
        sw: [
          'Kuwa mpole na heshimiana na wengine.',
          'Usipatie ushauri wa kitabibu.',
          'Nafasi hii inasimamiwa kuhakikisha usalama.',
          'Shiriki tu kile unachojisikia salama kushiriki.',
          'Heshimu faragha na siri za wengine.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Anne Sambuli',
        createdOn: '2026-02-11',
      },
    },
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
    memberCount: 123,
    entryMode: 'open',
    capabilities: {
      canPost: false,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'light',
      showGuidelines: false,
    },
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
    memberCount: 106,
    entryMode: 'open',
    capabilities: {
      canPost: false,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'light',
      showGuidelines: false,
    },
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
    memberCount: 218,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: true,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
    },
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
    memberCount: 114,
    entryMode: 'open',
    capabilities: {
      canPost: false,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'light',
      showGuidelines: false,
    },
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
    memberCount: 163,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: true,
    },
    moderation: {
      level: 'light',
      showGuidelines: false,
    },
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
    memberCount: 275,
    entryMode: 'request',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: false,
      canUploadMedia: false,
    },
    moderation: {
      level: 'strict',
      showGuidelines: true,
      escalationPath: 'professional',
    },
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
    memberCount: 185,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: false,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
    },
  },
];
