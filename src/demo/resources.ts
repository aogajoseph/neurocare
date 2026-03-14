// src/demo/resources.ts
export type ResourceItem = {
  id: string;
  title: string;
  description: string;
};

export type ResourceEntry = {
  slug: string;
  title: { en: string; sw: string };
  subtitle: { en: string; sw: string }; 
  icon: string; 
  route: string; 

  intro?: string;
  highlights?: string[];  
  items: ResourceItem[];
};

export const resources: ResourceEntry[] = [
  /**
   * 📚 Explore
   */
  {
    slug: 'articles',
    title: { en: 'Articles', sw: 'Makala' },
    subtitle: { en: 'Insights, education & awareness', sw: 'Maarifa, elimu na uelewa' },
    icon: 'document-text-outline',
    route: '/(drawer)/(content)/resources/articles',

    intro: 'Explore educational reads designed to improve understanding of neurological conditions, caregiving, recovery, and wellbeing.',

    items: [
      {
        id: 'art-1',
        title: 'Overcoming Spina Bifida',
        description:
          'Spina bifida is a congenital neurological condition that occurs when the spinal cord does not develop properly during early pregnancy. Its effects vary widely, ranging from mild physical limitations to complex mobility, bladder, bowel, and sensory challenges. Understanding the condition helps families and individuals plan for care, independence, and long-term wellbeing.\n\n' +
    
          'Daily life with spina bifida often involves coordinated medical care, assistive devices, and adaptive strategies. Many individuals lead active, fulfilling lives when supported with appropriate therapies, accessible environments, and social inclusion. Education, early intervention, and community support play a crucial role in improving outcomes.\n\n' +
    
          'Beyond medical aspects, emotional resilience and self-advocacy are essential. Encouraging autonomy, celebrating milestones, and fostering confidence can significantly enhance quality of life. With the right resources and support systems, people living with spina bifida can thrive academically, socially, and professionally.',
      },
      {
        id: 'art-2',
        title: 'Managing Caregiver Stress',
        description:
          'Caregiving is deeply meaningful, yet it can also be physically and emotionally demanding. Many caregivers experience fatigue, anxiety, guilt, or burnout, especially when balancing multiple responsibilities. Recognizing stress early is the first step toward protecting both caregiver wellbeing and the quality of care provided.\n\n' +
    
          'Healthy coping strategies include setting realistic expectations, taking restorative breaks, and seeking help when needed. Small habits — such as sleep hygiene, brief relaxation exercises, and maintaining social connections — can create significant improvements in resilience and mood over time.\n\n' +
    
          'Importantly, self-care is not selfish. A supported, emotionally balanced caregiver is better equipped to provide compassionate, sustainable care. Building a support network and practicing self-compassion helps transform caregiving from a draining duty into a manageable, shared journey.',
      },
      {
        id: 'art-3',
        title: 'Recovery & Rehabilitation',
        description:
          'Recovery following neurological illness or injury is rarely linear. Progress may be gradual, with periods of improvement, plateau, and adjustment. Rehabilitation focuses on restoring function, enhancing independence, and adapting to new realities rather than chasing perfection.\n\n' +
    
          'Therapies such as physiotherapy, occupational therapy, speech therapy, and psychological support work together to rebuild skills and confidence. Consistency, patience, and goal-setting are key components of successful rehabilitation journeys.\n\n' +
    
          'Equally important is mindset. Celebrating small gains, maintaining motivation, and accepting fluctuations can reduce frustration and discouragement. Recovery is not just physical — it is emotional, social, and deeply personal.',
      },
    ],    

  },
  {
    slug: 'questionnaires',
    title: { en: 'Questionnaires', sw: 'Dodoso' },
    subtitle: { en: 'Tools for self-check & assessment', sw: 'Zana za kujipima' },
    icon: 'help-circle-outline',
    route: '/(drawer)/(content)/resources/questionnaires',
    items: [
      {
        id: 'q-1',
        slug: 'community-needs',
        title: 'Neurological Needs Assessment',
        description: 'Help us understand regional needs and access gaps to improve outreach & support programs.',
      },
      {
        id: 'q-2',
        slug: 'caregiver-capacity',
        title: 'Caregiver Capacity Survey',
        description: 'Help us design better caregiver support programs and training initiatives.',
      },
    ],
  },
  {
    slug: 'talks',
    title: { en: 'Talks', sw: 'Majadiliano' },
    subtitle: { en: 'Expert discussions & insights', sw: 'Majadiliano ya wataalamu' },
    icon: 'chatbubbles-outline',
    route: '/(drawer)/(content)/resources/talks',
    items: [
      { id: 't-1', title: 'Neurology Q&A Monthly', description: 'Sposored by Neuro Care Foundation, featuring Prof. Yollanda Yolls.' },
      { id: 't-2', title: 'Mental Health Awareness', description: 'Neurosurgeons discuss complex spinal conditions, and recovery pathways.' },
    ],
  },
  {
    slug: 'training-videos',
    title: { en: 'Training Videos', sw: 'Video za Mafunzo' },
    subtitle: { en: 'Practical skills & guidance', sw: 'Ujuzi na mwongozo wa vitendo' },
    icon: 'play-circle-outline',
    route: '/(drawer)/(content)/resources/trainings',
    items: [
      { id: 'tv-1', title: 'Home-Based Therapy', description: 'Guided exercises to improve mobility and strength at home.' },
      { id: 'tv-2', title: 'Understanding Neurology', description: 'Insights into brain health and managing nervous system functions.' },
    ],
  },

  /**
   * 🎥 Media
   */
  {
    slug: 'recorded-webinars',
    title: { en: 'Recorded Webinars', sw: 'Webina Zilizorekodiwa' },
    subtitle: { en: 'Watch expert-led sessions', sw: 'Tazama vipindi vya wataalamu' },
    icon: 'videocam-outline',
    route: '/(drawer)/(content)/resources/webinars',
    items: [
      { id: 'w-1', title: 'Neurological Care in the Global South', description: 'Strategies for managing neurological conditions in resource-limited environments.' },
      { id: 'w-2', title: 'The Resilient Caregiver', description: 'A masterclass on protecting your mental health while providing care.' },
    ],
  },
  {
    slug: 'podcast',
    title: { en: 'Neuro Connect', sw: 'Podkasti ya Neuro Connect' },
    subtitle: { en: 'Stories, insights & conversations', sw: 'Hadithi na mazungumzo' },
    icon: 'mic-outline',
    route: '/(drawer)/(content)/resources/podcasts',
    items: [
      { id: 'p-1', title: 'Neuro Connect Podcast', description: 'Neuorological health conversations featuring lived experiences and expert tips.' },
      { id: 'p-2', title: 'Episode #1 - Susan Kioko', description: 'A mother\'s love, caring for a child with Brain Atrophy.' },
    ],
  },

  /**
   * 🤝 Get Involved
   */
  {
    slug: 'donate',
    title: { en: 'Donate', sw: 'Changia' },
    subtitle: { en: 'Help us make a difference.', sw: 'Tusidie kufanya mabadiliko.' },
    icon: 'heart-outline',
    route: '/(drawer)/(content)/resources/donate',
    items: [
      { id: 'd-1', title: 'One-Time Donation', description: 'Make a single contribution.' },
      { id: 'd-2', title: 'Monthly Giving', description: 'Sustain our activities long-term.' },
    ],
  },
  {
    slug: 'volunteer',
  
    title: { 
      en: 'Volunteer', 
      sw: 'Jitolee' 
    },
  
    subtitle: { 
      en: 'Offer your time & skills to support neuro care.', 
      sw: 'Toa muda na ujuzi wako kusaidia huduma za neurolojia.' 
    },
  
    icon: 'people-outline',
  
    route: '/(drawer)/(content)/resources/volunteer',
  
    // 👇 FORM CONTRACT (authoritative backend structure)
    form: {
      method: 'POST',
      endpoint: '/api/resources/volunteer/apply',
  
      submitLabel: {
        en: 'Submit Application',
        sw: 'Tuma Maombi'
      },
  
      successMessage: {
        en: 'Thank you for applying to volunteer. Our team will contact you shortly.',
        sw: 'Asante kwa kuomba kujitolea. Timu yetu itawasiliana nawe hivi karibuni.'
      },
  
      fields: [
        // PERSONAL INFORMATION
        {
          id: 'fullName',
          type: 'text',
          label: { en: 'Full Name', sw: 'Jina Kamili' },
          required: true,
          placeholder: { en: 'Enter your full name', sw: 'Weka jina lako kamili' }
        },
        {
          id: 'email',
          type: 'email',
          label: { en: 'Email Address', sw: 'Barua Pepe' },
          required: true,
          placeholder: { en: 'you@example.com', sw: 'wewe@example.com' }
        },
        {
          id: 'phone',
          type: 'phone',
          label: { en: 'Phone Number', sw: 'Nambari ya Simu' },
          required: true,
          placeholder: { en: '+254 7XX XXX XXX', sw: '+254 7XX XXX XXX' }
        },
        {
          id: 'location',
          type: 'text',
          label: { en: 'City / Location', sw: 'Mji / Eneo' },
          required: true,
          placeholder: { en: 'Nairobi, Kenya', sw: 'Nairobi, Kenya' }
        },
  
        // PROFESSIONAL BACKGROUND
        {
          id: 'profession',
          type: 'text',
          label: { en: 'Profession / Field of Study', sw: 'Taaluma / Masomo' },
          required: false,
          placeholder: { en: 'e.g., Nurse, Student, Developer', sw: 'Mfano: Muuguzi, Mwanafunzi, Msanidi' }
        },
        {
          id: 'skills',
          type: 'textarea',
          label: { en: 'Relevant Skills', sw: 'Ujuzi Muhimu' },
          required: true,
          placeholder: {
            en: 'Describe skills you can contribute (medical, tech, communication, admin, etc.)',
            sw: 'Eleza ujuzi unaoweza kuchangia (matibabu, teknolojia, mawasiliano, usimamizi, n.k.)'
          }
        },
  
        // AVAILABILITY
        {
          id: 'availability',
          type: 'select',
          label: { en: 'Availability', sw: 'Upatikanaji' },
          required: true,
          options: [
            { value: 'weekdays', label: { en: 'Weekdays', sw: 'Siku za Wiki' } },
            { value: 'weekends', label: { en: 'Weekends', sw: 'Mwisho wa Wiki' } },
            { value: 'flexible', label: { en: 'Flexible', sw: 'Inayobadilika' } }
          ]
        },
        {
          id: 'commitmentType',
          type: 'select',
          label: { en: 'Commitment Type', sw: 'Aina ya Kujitolea' },
          required: true,
          options: [
            { value: 'once', label: { en: 'One-Time Event', sw: 'Tukio Moja' } },
            { value: 'short_term', label: { en: 'Short-Term', sw: 'Muda Mfupi' } },
            { value: 'long_term', label: { en: 'Long-Term', sw: 'Muda Mrefu' } }
          ]
        },
  
        // PREFERRED VOLUNTEER AREA
        {
          id: 'volunteerArea',
          type: 'select',
          label: { en: 'Area of Interest', sw: 'Eneo la Kujitolea' },
          required: true,
          options: [
            { value: 'community_outreach', label: { en: 'Community Outreach', sw: 'Uhamasishaji wa Jamii' } },
            { value: 'hospital_support', label: { en: 'Hospital Support', sw: 'Msaada Hospitalini' } },
            { value: 'virtual_support', label: { en: 'Virtual Support', sw: 'Msaada wa Mtandaoni' } },
            { value: 'fundraising', label: { en: 'Fundraising', sw: 'Uchangishaji Fedha' } },
            { value: 'technical', label: { en: 'Technical / IT Support', sw: 'Msaada wa Teknolojia' } },
            { value: 'other', label: { en: 'Other', sw: 'Nyingine' } }
          ]
        },
  
        // MOTIVATION
        {
          id: 'motivation',
          type: 'textarea',
          label: { en: 'Why do you want to volunteer?', sw: 'Kwa nini unataka kujitolea?' },
          required: true,
          placeholder: {
            en: 'Tell us why you are interested in volunteering with Neuro Care.',
            sw: 'Tuambie kwa nini unataka kujitolea na Neuro Care.'
          }
        },
  
        // CONSENT
        {
          id: 'consent',
          type: 'checkbox',
          consentTitle: { en: 'Consent', sw: 'Ruhusa' },
          label: {
            en: 'I agree to be contacted regarding volunteer opportunities.',
            sw: 'Nakubali kuwasiliana nami kuhusu fursa za kujitolea.'
          },
          required: true
        },
      ]
    }
  },
  {
    slug: 'partnerships',
    title: {
      en: 'Partnerships',
      sw: 'Ushirikiano',
    },
    subtitle: {
      en: 'Collaborate with us to expand impact.',
      sw: 'Shirikiana nasi kupanua athari.',
    },
    icon: 'business-outline',
    route: '/(drawer)/(content)/resources/partnerships',

    partnership: {
      title: {
        en: 'Our Partners',
        sw: 'Washiriki Wetu',
      },
    },

    partners: [
      {
        id: 'p-1',
        name: '*Hadithi',
        logo: require('../../assets/images/hadithi.png'),
      },
      {
        id: 'p-3',
        name: 'Care Link Foundation',
        logo: require('../../assets/images/care_link.png'),
      },
      {
        id: 'p-2',
        name: 'Brain Research Trust',
        logo: require('../../assets/images/brain_research_trust.png'),
      },
    ],

    cta: {
      title: {
        en: 'Become a Partner',
        sw: 'Kuwa Mshirika',
      },
      description: {
        en: 'We welcome hospitals, NGOs, research institutions, donors and corporate organizations to collaborate with us in strengthening neurological support systems.',
        sw: 'Tunakribisha hospitali, mashirika yasiyo ya serikali, taasisi za utafiti, wafadhili na mshirika ya kibiashara kushirikiana nasi kuimarisha mifumo ya msaada wa kineurolojia.'
      },
    },

    form: {
      fields: [
        {
          id: 'organizationName',
          type: 'text',
          label: {
            en: 'Oganization Name',
            sw: 'Jina la Shirika',
          },
          placeholder: {
            en: 'Enter organization name',
            sw: 'Weka jina la shirika', 
          },
          required: true,
        },
        {
          id: 'contactPerson',
          type: 'text',
          label: {
            en: 'Contact Person',
            sw: 'Mtu wa Mawasiliano',
          },
          placeholder: {
            en: 'Enter full name',
            sw: 'Weka jina kamili', 
          },
          required: true,
        },
        {
          id: 'email',
          type: 'email',
          label: {
            en: 'Email Address',
            sw: 'Barua Pepe',
          },
          placeholder: {
            en: 'Enter email address',
            sw: 'Weka barua pepe', 
          },
          required: true,
        },
        {
          id: 'phone',
          type: 'phone',
          label: {
            en: 'Phone Number',
            sw: 'Nambari ya Simu',
          },
          placeholder: {
            en: 'Enter phone number',
            sw: 'Weka nambari ya simu', 
          },
        },
        {
          id: 'organizationType',
          type: 'select',
          label: {
            en: 'Organization Type',
            sw: 'Aina ya Shirika',
          },
          required: true,
          options: [
            { 
              value: 'hospital', 
              label: { en: 'Hospital / Clinic', sw: 'Hospitali / Kliniki' }, 
            }, 
            { 
              value: 'ngo', 
              label: { en: 'NGO / Non-profit', sw: 'NGO / Shirika Lisilo la Kiserikali' }, 
            }, 
            { 
              value: 'corporate', 
              label: { en: 'Corporate Organization', sw: 'Shirika la Kibiashara' }, 
            }, 
            { 
              value: 'research', 
              label: { en: 'Research Institution', sw: 'Taasisi ya Utafiti' }, 
            }, 
            { 
              value: 'other', 
              label: { en: 'Other', sw: 'Nyingine' }, 
            }, 
          ], 
        },
        { 
          id: 'partnershipInterest', 
          type: 'multi-select', 
          label: { 
            en: 'Area of Interest', 
            sw: 'Eneo la Ushirikiano', 
          }, 
          options: [ 
            { 
              value: 'funding', 
              label: { en: 'Funding & Grants', sw: 'Ufadhili & Ruzuku' }, 
            }, 
            { 
              value: 'research', 
              label: { en: 'Research Collaboration', sw: 'Ushirikiano wa Utafiti' }, 
            }, 
            { 
              value: 'community', 
              label: { en: 'Community Outreach', sw: 'Huduma za Jamii' }, 
            }, 
            { 
              value: 'technology', 
              label: { en: 'Technology Support', sw: 'Msaada wa Teknolojia' }, 
            }, 
          ], 
        }, 
        { 
          id: 'message', 
          type: 'textarea', 
          label: { en: 'Proposal / Message', sw: 'Pendekezo / Ujumbe', }, 
          placeholder: { 
            en: 'Briefly describe your proposed partnership...', 
            sw: 'Elezea kwa ufupi pendekezo lako la ushirikiano...', 
          }, 
          required: true, 
        }, 
      ],

      submitLabel: { 
        en: 'Submit', 
        sw: 'Tuma Ombi la Ushirikiano', 
      }, 
      
      successMessage: { 
        en: 'Thank you for your interest in partnering with us. We will contact you shortly.', 
        sw: 'Asante kwa nia yako ya kushirikiana nasi. Tutawasiliana nawe hivi karibuni.', 
      }, 
    }, 
  },
  {
    slug: 'events',
    title: { en: 'Events', sw: 'Matukio' },
    subtitle: { en: 'Upcoming & past activities', sw: 'Matukio yajayo na yaliyopita' },
    icon: 'calendar-outline',
    route: '/(drawer)/(content)/resources/events',
    items: [
      { id: 'e-1', title: 'Neuro Champions Awards', description: 'Celebrating excellence and honoring outstanding contributions to neurological health.', date: 'Dec 20, 2026.' },
      { id: 'e-2', title: 'World SBH Day', description: 'A day of global awareness and community activities for Spina Bifida and Hydrocephalus.', date: 'Oct 25, 2026.' },
    ],
  },

  /**
 * 🏛 Neuro Care Foundation
 */
  {
    slug: 'about-ncf',
    title: {
      en: 'About NCF',
      sw: 'Kuhusu NCF',
    },
    subtitle: {
      en: 'Who we are, what we do, and why it matters.',
      sw: 'Sisi ni nani, tunafanya nini, na kwa nini ni muhimu.',
    },
    icon: 'information-circle-outline',
    route: '/(drawer)/(content)/resources/about-ncf',

    hero: {
      description: {
        en: 'Neuro Care Foundation is a neurological health organization supporting people affected by neurological conditions and the public through trusted information, community support and guidance, in partnership with professionals, organizations and individuals with lived experience.',
        sw: 'Neuro Care Foundation ni shirika la afya ya neurolojia linalosaidia watu walioathirika na hali za neurolojia na umma kwa kutoa taarifa za kuaminika, msaada wa jamii na mwongozo, kwa kushirikiana na wataalamu, mashirika na watu wenye uzoefu wa moja kwa moja.',
  
      },
    },

    sections: [
      {
        id: 'mission',
        title: {
          en: 'Our Mission',
          sw: 'Dhamira Yetu',
        },
        description: {
          en: 'To expand access to neurological information, community support, and coordinated care systems for individuals and families affected by neurological conditions.',
          sw: 'Kupanua upatikanaji wa taarifa za neva, msaada wa jamii, na mifumo ya huduma iliyounganishwa kwa watu na familia zilizoathiriwa na changamoto za neva.',
        },
      },
      {
        id: 'vision',
        title: {
          en: 'Our Vision',
          sw: 'Maono Yetu',
        },
        description: {
          en: 'A future where every person living with a neurological condition has access to dignity, knowledge, and compassionate support.',
          sw: 'Mustakabali ambapo kila mtu anayeishi na changamoto ya neva ana upatikanaji wa heshima, maarifa, na msaada wa huruma.',
        },
      },
      {
        id: 'programs',
        title: {
          en: 'Our Programs',
          sw: 'Programu Zetu',
        },
        description: {
          en: 'Caregiver support programs, community awareness initiatives, digital neurological guidance tools, advocacy campaigns, and collaborative research partnerships.',
          sw: 'Programu za msaada kwa walezi, kampeni za uhamasishaji wa jamii, zana za kidijitali za mwongozo wa neva, kampeni za utetezi, na ushirikiano wa utafiti.',
        },
      },
      {
        id: 'approach',
        title: {
          en: 'Our Approach',
          sw: 'Mbinu Yetu',
        },
        description: {
          en: 'We combine technology, education, and community partnerships to build sustainable neurological care ecosystems that are locally responsive and globally informed.',
          sw: 'Tunachanganya teknolojia, elimu, na ushirikiano wa jamii kujenga mifumo endelevu ya huduma za neva inayojibu mahitaji ya ndani na kuongozwa na maarifa ya kimataifa.',
        },
      },
    ],

    stats: [
      {
        id: 'stat-1',
        label: { en: 'Communities Engaged', sw: 'Jamii Zilizofikiwa' },
        value: '25+',
      },
      {
        id: 'stat-2',
        label: { en: 'Caregivers Supported', sw: 'Walezi Walioungwa Mkono' },
        value: '500+',
      },
      {
        id: 'stat-3',
        label: { en: 'Programs Launched', sw: 'Programu Zilizozinduliwa' },
        value: '8',
      },
    ],

    callToAction: {
      title: {
        en: 'Join Our Mission',
        sw: 'Jiunge na Dhamira Yetu',
      },
      description: {
        en: 'As a caregiver, living with a condition, healthcare professional, organization or supporter, there is a place for everyone in strengthening neurological care.',
        sw: 'Kama mlezi, mtu anayepambana na hali ya kiafya, mtaalamu wa afya, shirika au msaidizi, kuna nafasi kwa kila mtu katika kuimarisha huduma za neurolojia.',
      },
      buttonLabel: {
        en: 'Get Involved',
        sw: 'Shiriki Nasi',
      },
      route: '/(drawer)/(content)/resources/volunteer',
    },
  }
];
