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

  /** Share metadata */
  share?: {
    message: {
      en: string;
      sw: string;
    };
  };

  /** Moderation & safety */
  moderation: {
    level: ModerationLevel;
    showGuidelines: boolean;
    escalationPath?: 'admin' | 'professional' | 'external';
    status?: 'active' | 'frozen';
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
    * Guidance & Counselling
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
      status: 'active',
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
    share: {
      message: {
        en: `Join me in the Caregiver Guidance & Counselling space on Neuro Care. A supportive place for caregivers.
        \n              neurocare://community/caregiver-guidance`,
        
        sw: `Jiunge nami kwenye Nafasi ya Mwongozo na Ushauri kwa Walezi ndani ya Neuro Care. Mahali pa msaada kwa walezi.
        \n              neurocare://community/caregiver-guidance`,
      },
    },    
  },

  /**
    * Understanding Conditions & Care
  */
  {
    id: 'understanding-neuro-care',
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
    aboutSpace: {
      en: 'This space was created to help caregivers better understand neurological conditions, treatments and care journeys. It offers clear, plain-language explanations, trusted insights and supportive discussions that build confidence in navigating care. It is a place to learn, ask questions and gain clarity about what to expect.',
      sw: 'Eneo hili limetengenezwa kusaidia walezi kuelewa vyema hali za kinyurolojia, matibabu na safari ya huduma. Linatoa maelezo rahisi na yanayoeleweka, maarifa ya kuaminika na majadiliano yanayosaidia kujenga ujasiri katika kutoa na kusimamia huduma. Ni mahali pa kujifunza, kuuliza maswali na kupata ufafanuzi kuhusu nini cha kutarajia.',
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
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
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
        moderatedBy: 'Prof. Amina Mohammed',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Caregiver Guidance & Counselling space on Neuro Care. A supportive place for caregivers.
        \n              neurocare://community/understanding-care`,
        
        sw: `Jiunge nami kwenye Nafasi ya Mwongozo na Ushauri kwa Walezi ndani ya Neuro Care. Mahali pa msaada kwa walezi.
        \n              neurocare://community/understanding-care`,
      },
    },
  },

  /**
    * Caregiving Basics
  */
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
      en: 'Practical guidance on daily care routines, safety, medication support and essential caregiving skills.',
      sw: 'Mwongozo wa vitendo kuhusu ratiba za kila siku, usalama, usaidizi wa dawa na ujuzi muhimu wa ulezi.',
    },
    aboutSpace: {
      en: 'This space was created to support caregivers with the practical aspects of everyday care. It focuses on routines, safety, medication management and simple strategies that make caregiving more manageable. It is a place to learn, share practical tips and build confidence in providing daily support.',
      sw: 'Eneo hili limetengenezwa kusaidia walezi katika mambo ya vitendo ya ulezi wa kila siku. Linaangazia ratiba, usalama, usimamizi wa dawa na mbinu rahisi zinazorahisisha ulezi. Ni mahali pa kujifunza, kushirikiana vidokezo vya vitendo na kujenga ujasiri katika kutoa msaada wa kila siku.',
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
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Explore practical caregiving tips, daily routines, and safety guidance designed to support you in everyday care.',
        sw: 'Chunguza vidokezo vya ulezi, ratiba za kila siku, na mwongozo wa usalama ulioundwa kukusaidia katika ulezi wa kila siku.',
      },
      rules: {
        en: [
          'Be respectful and supportive.',
          'Share practical experiences and tips.',
          'Avoid giving medical diagnoses or prescriptions.',
          'Remember that care needs vary for each person.',
        ],
        sw: [
          'Kuwa na heshima na msaada kwa wengine.',
          'Shiriki uzoefu na vidokezo vya vitendo.',
          'Epuka kutoa uchunguzi au maagizo ya dawa.',
          'Kumbuka mahitaji ya huduma hutofautiana kwa kila mtu.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. George Kisiangani',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Caregiving Basics space on Neuro Care. Helpful daily caregiving tips and guidance.
        \n              neurocare://community/caregiving-basics`,
  
        sw: `Jiunge nami kwenye Nafasi ya Misingi ya Ulezi ndani ya Neuro Care. Vidokezo na mwongozo wa ulezi wa kila siku.
        \n              neurocare://community/caregiving-basics`,
      },
    },
  },  

  /**
    * Caregiver Peer Support
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
      en: 'A supportive space for caregivers to share experiences, challenges, encouragement and small wins.',
      sw: 'Nafasi ya msaada kwa walezi kushirikiana uzoefu, changamoto, faraja na mafanikio madogo.',
    },
    aboutSpace: {
      en: 'This space was created to connect caregivers through shared experiences and mutual support. It is a place to speak openly, exchange encouragement and learn from others who understand the realities of caregiving. Conversations here focus on empathy, connection and community.',
      sw: 'Eneo hili limetengenezwa kuwaunganisha walezi kupitia uzoefu wa pamoja na kusaidiana. Ni mahali pa kuzungumza kwa uwazi, kubadilishana faraja na kujifunza kutoka kwa wengine wanaoelewa hali halisi ya ulezi. Mazungumzo hapa yanahusu huruma, uhusiano na jamii.',
    },
    memberCount: 618,
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
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to the Caregivers’ Peer Circle. You are among people who understand the caregiving journey. Share, connect and support one another.',
        sw: 'Karibu kwenye Mduara wa Walezi. Uko pamoja na watu wanaoelewa safari ya ulezi. Shiriki, ungana na saidianeni.',
      },
      rules: {
        en: [
          'Be kind, respectful and supportive.',
          'Share experiences, not medical advice.',
          'Respect privacy and confidentiality.',
          'Different caregiving journeys are valid.',
        ],
        sw: [
          'Kuwa mpole, na heshima, na msaada.',
          'Shiriki uzoefu, si ushauri wa kitabibu.',
          'Heshimu faragha na siri za wengine.',
          'Safari za ulezi hutofautiana na zote ni halali.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Ms. Christabel Naimoi',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Caregivers’ Peer Circle on Neuro Care. A space for connection, support, and shared caregiving experiences.
        \n              neurocare://community/caregiver-peer-support`,
  
        sw: `Jiunge nami kwenye Mduara wa Walezi ndani ya Neuro Care. Nafasi ya uhusiano, msaada, na uzoefu wa pamoja wa ulezi.
        \n              neurocare://community/caregiver-peer-support`,
      },
    },
  },  

  /**
    * Care Resources & Services
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
    aboutSpace: {
      en: 'This space was created to help caregivers discover and share trusted information about care-related services. Discussions focus on clinics, therapy options, support organizations, assistive services and navigating access to care. It is a place to exchange helpful resources and practical recommendations.',
      sw: 'Eneo hili limetengenezwa kusaidia walezi kugundua na kushirikiana taarifa za kuaminika kuhusu huduma za ulezi. Mazungumzo yanahusu kliniki, tiba, mashirika ya msaada, huduma saidizi na jinsi ya kupata huduma. Ni mahali pa kubadilishana rasilimali na mapendekezo ya vitendo.',
    },
    memberCount: 114,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to Care Resources & Services. Share helpful information about clinics, therapists, organizations and services that may support fellow caregivers.',
        sw: 'Karibu kwenye Rasilimali na Huduma za Ulezi. Shiriki taarifa muhimu kuhusu kliniki, wataalamu, mashirika na huduma zinazoweza kusaidia walezi wengine.',
      },
      rules: {
        en: [
          'Share accurate and helpful information.',
          'Avoid medical diagnoses or prescriptions.',
          'No spam, advertising, or self-promotion.',
          'Respect privacy and confidentiality.',
        ],
        sw: [
          'Shiriki taarifa sahihi na zenye msaada.',
          'Epuka uchunguzi au maagizo ya dawa.',
          'Hakuna spam au matangazo ya kibiashara.',
          'Heshimu faragha na siri za wengine.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Olivia Otieno',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Care Resources & Services space on Neuro Care. Discover and share helpful care-related services and support options.
        \n              neurocare://community/care-resources`,
  
        sw: `Jiunge nami kwenye Nafasi ya Rasilimali na Huduma za Ulezi ndani ya Neuro Care. Gundua na shiriki huduma na msaada wa ulezi.
        \n              neurocare://community/care-resources`,
      },
    },
  },
  
  /**
    * Assistive Tools
  */
  {
    id: 'assistive-tools',
    role: 'caregiver',
    category: {
      en: 'Daily Care & Support',
      sw: 'Huduma na Msaada wa Kila Siku',
    },
    title: {
      en: 'Assistive Tools & Daily Living Tips',
      sw: 'Vifaa Saidizi na Vidokezo vya Maisha ya Kila Siku',
    },
    description: {
      en: 'Tools, devices, and practical tips that make daily caregiving safer and more manageable.',
      sw: 'Vifaa, zana, na vidokezo vya vitendo vinavyorahisisha na kuboresha usalama wa ulezi wa kila siku.',
    },
    aboutSpace: {
      en: 'This space was created to help caregivers discover and share helpful assistive tools, adaptive devices and practical strategies for everyday care. Discussions focus on mobility aids, safety tools, home adjustments and simple tips that reduce strain and improve daily routines.',
      sw: 'Eneo hili limetengenezwa kusaidia walezi kugundua na kushirikiana vifaa saidizi, zana za marekebisho na mbinu za vitendo kwa ulezi wa kila siku. Mazungumzo yanahusu vifaa vya uhamaji, usalama, marekebisho ya nyumbani na vidokezo vinavyorahisisha ratiba za kila siku.',
    },
    memberCount: 114,
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
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to Assistive Tools & Daily Living Tips. Share devices, tools and practical caregiving tips that improve safety, comfort and independence.',
        sw: 'Karibu kwenye Vifaa Saidizi na Vidokezo vya Maisha ya Kila Siku. Shiriki vifaa, zana na vidokezo vya ulezi vinavyoboresha usalama, faraja na kujitegemea.',
      },
      rules: {
        en: [
          'Share practical, experience-based tips.',
          'Avoid medical diagnoses or prescriptions.',
          'Be honest about what worked and what didn’t.',
          'Respect privacy and individual differences.',
        ],
        sw: [
          'Shiriki vidokezo vya vitendo kutokana na uzoefu.',
          'Epuka uchunguzi au maagizo ya dawa.',
          'Eleza kwa uaminifu kilichosaidia au hakikusaidia.',
          'Heshimu faragha na tofauti za kila mtu.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Jackson Kibagendi',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Assistive Tools & Daily Living Tips space on Neuro Care. Discover tools and smart caregiving ideas that make daily care easier.
        \n              neurocare://community/assistive-tools`,
  
        sw: `Jiunge nami kwenye Nafasi ya Vifaa Saidizi na Vidokezo vya Maisha ya Kila Siku ndani ya Neuro Care. Gundua zana na mbinu rahisi za ulezi.
        \n              neurocare://community/assistive-tools`,
      },
    },
  },

  /**
    * Ask a Professional
  */
  {
    id: 'ask-health-pro',
    role: 'caregiver',
    category: {
      en: 'Professional Guidance',
      sw: 'Mwongozo wa Kitaalamu',
    },
    title: {
      en: 'Ask a Health Professional',
      sw: 'Uliza Kwa Mtaalamu wa Afya',
    },
    description: {
      en: 'A space to ask questions and get guidance from qualified health professionals on caregiving, neurological conditions and wellness.',
      sw: 'Nafasi ya kuuliza maswali na kupata mwongozo kutoka kwa wataalamu wa afya waliyoidhinishwa kuhusu ulezi, hali za kinyurolojia, na ustawi.',
    },
    aboutSpace: {
      en: 'This space was created to connect caregivers with health professionals who can provide evidence-based guidance. Discussions focus on neurological conditions, symptoms, treatments medication management and strategies to support patient wellbeing. It is a safe place to ask questions and gain reliable professional insights.',
      sw: 'Eneo hili limetengenezwa kuunganisha walezi na wataalamu wa afya wanaoweza kutoa mwongozo unaotegemea ushahidi. Mazungumzo yanahusu hali za kinyurolojia, dalili, matibabu, usimamizi wa dawa na mbinu za kusaidia ustawi wa mgonjwa. Ni mahali salama kuuliza maswali na kupata maarifa ya kitaalamu yanayoaminika.',
    },
    memberCount: 132,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to Ask a Health Professional. Post your caregiving questions and get guidance from qualified health experts.',
        sw: 'Karibu kwenye Uliza Kwa Mtaalamu wa Afya. Chapisha maswali yako kuhusu ulezi na pata mwongozo kutoka kwa wataalamu wa afya waliyoidhinishwa.',
      },
      rules: {
        en: [
          'Ask clear and specific questions.',
          'Do not share personal medical records publicly.',
          'Respect the advice and expertise of professionals.',
          'Be courteous and patient while waiting for responses.',
        ],
        sw: [
          'Uliza maswali yaliyo wazi na maalum.',
          'Usishiriki rekodi za afya za kibinafsi hadharani.',
          'Heshimu ushauri na ujuzi wa wataalamu.',
          'Kuwa na heshima na subira wakati unasubiri majibu.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Geoffrey Mong\'are',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Ask a Health Professional space on Neuro Care. Get reliable guidance and answers to your caregiving questions.
        \n              neurocare://community/ask-health-pro`,
        sw: `Jiunge nami kwenye Nafasi ya Uliza Kwa Mtaalamu wa Afya ndani ya Neuro Care. Pata mwongozo wa kuaminika na majibu ya maswali yako ya ulezi.
        \n              neurocare://community/ask-health-pro`,
      },
    },
  },
  
  /**
    * Caregiver Wellbeing
  */
  {
    id: 'caring-for-caregiver',
    role: 'caregiver',
    category: {
      en: 'Caregiver Support',
      sw: 'Msaada kwa Walezi',
    },
    title: {
      en: 'Caring for the Caregiver',
      sw: 'Kujali Mlezi',
    },
    description: {
      en: 'A space dedicated to supporting caregivers’ wellbeing, stress management, emotional health and self-care practices.',
      sw: 'Nafasi iliyojitolea kusaidia ustawi wa walezi, usimamizi wa msongo, afya ya hisia na mbinu za kujitunza.',
    },
    aboutSpace: {
      en: 'This space was created to focus on the health, resilience, and emotional wellbeing of caregivers. Discussions include stress relief strategies, self-care routines, mental health, and tips for maintaining balance while supporting others. It is a safe place to share experiences, ask for advice, and learn ways to care for yourself while caring for someone else.',
      sw: 'Eneo hili limetengenezwa kuzingatia afya, uimara, na ustawi wa hisia wa walezi. Mazungumzo yanahusu mbinu za kupunguza msongo, ratiba za kujitunza, afya ya akili, na vidokezo vya kudumisha usawa wakati unasaidia wengine. Ni mahali salama kushirikiana uzoefu, kuuliza ushauri, na kujifunza njia za kujitunza unapojali mtu mwingine.',
    },
    memberCount: 128,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to Caring for the Caregiver. Share your experiences, ask for advice, and discover ways to maintain your wellbeing while providing care.',
        sw: 'Karibu kwenye Kujali Mlezi. Shiriki uzoefu wako, uliza ushauri, na gundua njia za kudumisha ustawi wako wakati unatoa huduma.',
      },
      rules: {
        en: [
          'Be supportive and respectful of all members.',
          'Share experiences and self-care tips, not medical diagnoses.',
          'Respect privacy and confidentiality.',
          'Acknowledge that every caregiver’s journey is unique.',
        ],
        sw: [
          'Kuwa msaada na heshima kwa wanajamii wote.',
          'Shiriki uzoefu na vidokezo vya kujitunza, si uchunguzi wa kitabibu.',
          'Heshimu faragha na siri za wengine.',
          'Tambua kuwa safari ya kila mlezi ni ya kipekee.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Phoebe Achieng',
        createdOn: '2026-02-11',
      },
    },
    share: {
      message: {
        en: `Join me in the Caring for the Caregiver space on Neuro Care. Learn, share, and discover ways to nurture yourself while caring for others.
        \n              neurocare://community/caring-for-caregiver`,
        sw: `Jiunge nami kwenye Nafasi ya Kujali Mlezi ndani ya Neuro Care. Jifunze, shiriki, na gundua njia za kujitunza wakati unasaidia wengine.
        \n              neurocare://community/caring-for-caregiver`,
      },
    },
  },

  /**
    *  PWD – Peer Circle
  */
  {
    id: 'pwd-peer-circle',
    role: 'pwd',
    category: {
      en: 'Peer Support',
      sw: 'Msaada wa Kijamii',
    },
    title: {
      en: 'PWD Peer Circle',
      sw: 'Mduara wa Wanaoishi na Hali',
    },
    description: {
      en: 'A supportive space to connect, share experiences and encourage one another.',
      sw: 'Nafasi ya msaada ya kuungana, kushirikiana uzoefu na kutiana moyo.',
    },
    aboutSpace: {
      en: 'This space was created for people living with neurological conditions to connect through shared experiences. It is a place to speak openly, exchange encouragement and find understanding within a supportive community.',
      sw: 'Eneo hili limetengenezwa kwa watu wanaoishi na hali za kinyurolojia kuungana kupitia uzoefu wa pamoja. Ni mahali pa kuzungumza kwa uwazi, kubadilishana faraja na kupata uelewa katika jamii yenye msaada.',
    },
    memberCount: 342,
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
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome to the PWD Peer Circle 💛 Share your journey, connect with others and support one another.',
        sw: 'Karibu kwenye Mduara wa Wanaoishi na Hali 💛 Shiriki safari yako, ungana na wengine na saidianeni.',
      },
      rules: {
        en: [
          'Be kind, respectful and supportive.',
          'Share lived experiences, not medical advice.',
          'Respect privacy and confidentiality.',
          'Every journey is valid.',
        ],
        sw: [
          'Kuwa mpole, na heshima, na msaada.',
          'Shiriki uzoefu wa maisha, si ushauri wa kitabibu.',
          'Heshimu faragha na siri za wengine.',
          'Kila safari ni halali.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: ['Dr. Winny Ochieng'],
        createdOn: '2026-02-16',
      },
    },
    share: {
      message: {
        en: `Join me in the Caring for the Caregiver space on Neuro Care. Learn, share, and discover ways to nurture yourself while caring for others.
        \n              neurocare://community/pwd-peer-circle`,
        sw: `Jiunge nami kwenye Nafasi ya Kujali Mlezi ndani ya Neuro Care. Jifunze, shiriki, na gundua njia za kujitunza wakati unasaidia wengine.
        \n              neurocare://community/pwd-peer-circle`,
      },
    },
  },

  /**
    *  Living Well
  */
  {
    id: 'living-well',
    role: 'pwd',
    category: {
      en: 'Wellbeing & Lifestyle',
      sw: 'Ustawi na Maisha',
    },
    title: {
      en: 'Living Well & Wellness',
      sw: 'Kuishi Vizuri na Ustawi',
    },
    description: {
      en: 'Conversations on mental wellbeing, routines, motivation and self-care.',
      sw: 'Mazungumzo kuhusu afya ya akili, ratiba, motisha na kujitunza.',
    },
    aboutSpace: {
      en: 'This space focuses on emotional wellbeing, resilience and quality of life. Members share coping strategies, small wins, daily routines and encouragement for navigating life with a condition.',
      sw: 'Eneo hili linaangazia ustawi wa kihisia, uimara na ubora wa maisha. Wanachama hushirikiana mbinu za kujikabiliana, mafanikio madogo, ratiba za kila siku na faraja.',
    },
    memberCount: 198,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome 💛 This is your space to talk about wellbeing, mindset and daily life.',
        sw: 'Karibu 💛 Hii ni nafasi yako ya kuzungumzia ustawi na maisha ya kila siku.',
      },
      rules: {
        en: [
          'Be kind, respectful and supportive.',
          'Share lived experiences, not medical advice.',
          'Respect privacy and confidentiality.',
          'Every journey is valid.',
        ],
        sw: [
          'Kuwa mpole, na heshima, na msaada.',
          'Shiriki uzoefu wa maisha, si ushauri wa kitabibu.',
          'Heshimu faragha na siri za wengine.',
          'Kila safari ni halali.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Victor Menya',
        createdOn: '2026-02-16',
      },
    },
    share: {
      message: {
        en: `Join me in the Caring for the Caregiver space on Neuro Care. Learn, share, and discover ways to nurture yourself while caring for others.
        \n              neurocare://community/living-well`,
        sw: `Jiunge nami kwenye Nafasi ya Kujali Mlezi ndani ya Neuro Care. Jifunze, shiriki, na gundua njia za kujitunza wakati unasaidia wengine.
        \n              neurocare://community/living-well`,
      },
    },
  },

  /**
    *  Symptoms & Daily Life
  */
  {
    id: 'symptoms-daily-life',
    role: 'pwd',
    category: {
      en: 'Condition & Symptoms',
      sw: 'Hali na Dalili',
    },
    title: {
      en: 'Symptoms & Daily Life',
      sw: 'Dalili na Maisha ya Kila Siku',
    },
    description: {
      en: 'Discuss symptom experiences, patterns and practical coping tips.',
      sw: 'Jadili uzoefu wa dalili, mabadiliko na mbinu za kujikabiliana.',
    },
    aboutSpace: {
      en: 'Members share personal experiences with symptoms, triggers and daily challenges. The focus is on understanding, shared learning and practical adaptation — not diagnosis.',
      sw: 'Wanachama hushirikiana uzoefu wa dalili, vichocheo na changamoto za kila siku. Lengo ni uelewa na kujifunza pamoja — si uchunguzi.',
    },
    memberCount: 257,
    entryMode: 'open',
    capabilities: {
      canPost: true,
      canReply: true,
      canReact: true,
      canUploadMedia: false,
    },
    moderation: {
      level: 'moderated',
      showGuidelines: true,
      escalationPath: 'professional',
      status: 'active',
    },
    systemMessages: {
      welcome: {
        en: 'Welcome 💛 This is your space to talk about symptoms and daily life.',
        sw: 'Karibu 💛 Hii ni nafasi yako ya kuzungumzia dalili na maisha ya kila siku.',
      },
      rules: {
        en: [
          'Be kind, respectful and supportive.',
          'Share lived experiences, not medical advice.',
          'Respect privacy and confidentiality.',
          'Every journey is valid.',
        ],
        sw: [
          'Kuwa mpole, na heshima, na msaada.',
          'Shiriki uzoefu wa maisha, si ushauri wa kitabibu.',
          'Heshimu faragha na siri za wengine.',
          'Kila safari ni halali.',
        ],
      },
      meta: {
        createdBy: 'Neuro Care Foundation',
        moderatedBy: 'Dr. Erastus Seda',
        createdOn: '2026-02-16',
      },
      share: {
        message: {
          en: `Join me in the Caring for the Caregiver space on Neuro Care. Learn, share, and discover ways to nurture yourself while caring for others.
          \n              neurocare://community/symptoms`,
          sw: `Jiunge nami kwenye Nafasi ya Kujali Mlezi ndani ya Neuro Care. Jifunze, shiriki, na gundua njia za kujitunza wakati unasaidia wengine.
          \n              neurocare://community/symptoms`,
        },
      },      
    },
  },

  
];
