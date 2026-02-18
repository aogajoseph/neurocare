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
    subtitle: { en: 'Self-check tools & assessments', sw: 'Zana za kujipima' },
    icon: 'help-circle-outline',
    route: '/(drawer)/(content)/resources/questionnaires',
    items: [
      { id: 'q-1', title: 'Daily Symptom Tracker', description: 'Log your symptoms each day for better insights.' },
      { id: 'q-2', title: 'Caregiver Wellbeing Assessment', description: 'Evaluate your mental and physical health while caring for others.' },
    ],
  },
  {
    slug: 'talks',
    title: { en: 'Talks', sw: 'Majadiliano' },
    subtitle: { en: 'Expert discussions & insights', sw: 'Majadiliano ya wataalamu' },
    icon: 'chatbubbles-outline',
    route: '/(drawer)/(content)/resources/talks',
    items: [
      { id: 't-1', title: 'Neurology Q&A', description: 'Ask doctors about common neurological concerns.' },
      { id: 't-2', title: 'Mental Health Awareness', description: 'Psychologists discuss stress and coping strategies.' },
    ],
  },
  {
    slug: 'training-videos',
    title: { en: 'Training Videos', sw: 'Video za Mafunzo' },
    subtitle: { en: 'Practical skills & guidance', sw: 'Ujuzi na mwongozo wa vitendo' },
    icon: 'play-circle-outline',
    route: '/(drawer)/(content)/resources/training-videos',
    items: [
      { id: 'tv-1', title: 'Safe Patient Handling', description: 'Learn proper lifting and mobility techniques.' },
      { id: 'tv-2', title: 'Nutrition & Meal Planning', description: 'Practical tips for balanced diets.' },
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
    route: '/(drawer)/(content)/resources/recorded-webinars',
    items: [
      { id: 'w-1', title: 'Neurology Basics', description: 'Recorded webinar on neurological conditions.' },
      { id: 'w-2', title: 'Caregiver Self-Care', description: 'Learn stress management techniques for caregivers.' },
    ],
  },
  {
    slug: 'podcast',
    title: { en: 'Neuro Connect Podcast', sw: 'Podkasti ya Neuro Connect' },
    subtitle: { en: 'Stories, insights & conversations', sw: 'Hadithi na mazungumzo' },
    icon: 'mic-outline',
    route: '/(drawer)/(content)/resources/podcast',
    items: [
      { id: 'p-1', title: 'Episode 1: Life with Parkinson’s', description: 'Patient stories and expert tips.' },
      { id: 'p-2', title: 'Episode 2: Mental Health Awareness', description: 'Coping strategies and advice.' },
    ],
  },

  /**
   * 🤝 Get Involved
   */
  {
    slug: 'donate',
    title: { en: 'Donate', sw: 'Changia' },
    subtitle: { en: 'Support patients & programs', sw: 'Saidia wagonjwa na programu' },
    icon: 'heart-outline',
    route: '/(drawer)/(content)/resources/donate',
    items: [
      { id: 'd-1', title: 'One-Time Donation', description: 'Support individual programs.' },
      { id: 'd-2', title: 'Monthly Giving', description: 'Sustain our activities long-term.' },
    ],
  },
  {
    slug: 'volunteer',
    title: { en: 'Volunteer', sw: 'Jitolee' },
    subtitle: { en: 'Offer your time & skills', sw: 'Toa muda na ujuzi wako' },
    icon: 'people-outline',
    route: '/(drawer)/(content)/resources/volunteer',
    items: [
      { id: 'v-1', title: 'Community Outreach', description: 'Participate in local initiatives.' },
      { id: 'v-2', title: 'Virtual Support', description: 'Assist patients remotely.' },
    ],
  },
  {
    slug: 'partnerships',
    title: { en: 'Partnerships', sw: 'Ushirikiano' },
    subtitle: { en: 'Collaborate with NCF', sw: 'Shirikiana na NCF' },
    icon: 'handshake-outline',
    route: '/(drawer)/(content)/resources/partnerships',
    items: [
      { id: 'pa-1', title: 'Corporate Collaboration', description: 'Partner with NCF to support programs.' },
    ],
  },
  {
    slug: 'events',
    title: { en: 'Events', sw: 'Matukio' },
    subtitle: { en: 'Upcoming & past activities', sw: 'Matukio yajayo na yaliyopita' },
    icon: 'calendar-outline',
    route: '/(drawer)/(content)/resources/events',
    items: [
      { id: 'e-1', title: 'Annual Neurology Conference', description: 'Summarizing key insights.' },
      { id: 'e-2', title: 'Caregiver Workshop', description: 'Interactive session for families.' },
    ],
  },

  /**
   * 🏛 Neuro Care Foundation
   */
  {
    slug: 'about-ncf',
    title: { en: 'About Neuro Care Foundation', sw: 'Kuhusu' },
    subtitle: { en: 'Who we are & what we do', sw: 'Sisi ni nani na tunafanya nini' },
    icon: 'information-circle-outline',
    route: '/(drawer)/(content)/resources/about-ncf',
    items: [
      { id: 'ncf-1', title: 'Our Mission', description: 'Providing neurological care and support.' },
      { id: 'ncf-2', title: 'Our Programs', description: 'Caregiver support, PWD guidance, training, and advocacy.' },
    ],
  },
];
