// src/demo/home.ts
export const DEMO_HOME = {
  hero: {
    welcome: {
      en: 'Welcome',
      sw: 'Karibu',
    },
    intro: {
      en: 'Find clear information, support and practical guidance for neurological health.',
      sw: 'Pata taarifa sahihi, msaada na mwongozo wa vitendo kuhusu afya ya mfumo wa neurolojia.',
    },
  },

  sectionTitles: {
    whatYouCanDo: { en: 'What can you do here?', sw: 'Unaweza kufanya nini hapa?' },
    conditionsAZ: { en: 'Popular Conditions', sw: 'Hali Maarufu' },
    learnWithConfidence: { en: 'Learn with confidence', sw: 'Jifunze kwa uhakika' },
    helpNow: { en: 'Need help now?', sw: 'Unahitaji msaada sasa?' },
  },

  whatYouCanDo: [
    {
      id: 'conditions',
      title: { en: 'Understand Conditions', sw: 'Fahamu Hali' },
      description: {
        en: 'Learn clearly about neurological conditions and how they affect the quality of life.',
        sw: 'Jifunze kwa uwazi kuhusu hali za neurolojia na jinsi zinavyoathiri maisha.',
      },
      route: '/(drawer)/(content)/learn/neurology',
    },
    {
      id: 'living',
      title: { en: 'Live Well with a Condition', sw: 'Ishi Vyema na Hali' },
      description: {
        en: 'Get Support and practical guidance to help you live a quality life every day.',
        sw: 'Pata Msaada na mwongozo wa vitendo kukusaidia kuishi maisha yenye ubora kila siku.',
      },
      route: '/(drawer)/(content)/learn/living',
    },
    {
      id: 'support',
      title: { en: 'Get Support', sw: 'Pata Msaada' },
      description: {
        en: 'Find trusted organizations, communities and resources that can help provide Support.',
        sw: 'Pata mashirika, jumuiya na rasilimali za kuaminika zinazoweza kusaidia kutoa msaada.',
      },
      route: '/(drawer)/(content)/support/help',
    },
  ],

  popularConditions: [
    { slug: 'stroke', label: 'Stroke' },
    { slug: 'epilepsy', label: 'Epilepsy' },
    { slug: 'parkinsons', label: 'Parkinson’s' },
    { slug: 'migraine', label: 'Migraine' },
    { slug: 'dementia', label: 'Dementia' },
  ],

  viewAll: { en: 'View all', sw: 'Tazama zote' },

  learnWithConfidence: [
    {
      id: 'myths',
      title: { en: 'Myths vs Facts', sw: 'Hadithi dhidi ya Ukweli' },
      description: {
        en: 'Clear misconceptions and learn what’s medically accurate.',
        sw: 'Ondoa dhana potofu na ujifunze ukweli wa kitabibu.',
      },
      route: '/(drawer)/(content)/learn/myths',
    },
    {
      id: 'child',
      title: { en: 'Child Protection', sw: 'Ulinzi wa Mtoto' },
      description: {
        en: 'Safeguarding children with neurological conditions.',
        sw: 'Kulinda watoto wenye hali ya mfumo wa neurolojia.',
      },
      route: '/(drawer)/(content)/legal/child-protection',
    },
    {
      id: 'caregiver',
      title: { en: 'Caregiver Guidance', sw: 'Mwongozo wa Walezi' },
      description: {
        en: 'Support and practical advice for caregivers and families.',
        sw: 'Pata msaada na ushauri wa vitendo kwa walezi na familia.',
      },
      route: '/(drawer)/(content)/learn/caregiver',
    },
  ],

  helpNow: [
    {
      id: 'emergency',
      title: { en: 'Emergency Resources', sw: 'Rasilimali za Dharura' },
      description: {
        en: 'Find urgent help and emergency guidance.',
        sw: 'Pata msaada wa haraka na mwongozo wa dharura.',
      },
      route: '/(drawer)/(content)/support/emergency',
    },
    {
      id: 'report',
      title: { en: 'Report a Concern', sw: 'Ripoti Tatizo' },
      description: {
        en: 'Raise concerns safely and confidentially.',
        sw: 'Toa taarifa za wasiwasi kwa usalama na kwa siri.',
      },
      route: '/(drawer)/(content)/support/report',
    },
  ],

  reassurance: {
    en: 'You are not alone. Whether you are living with a neurological condition, caring for someone or simply seeking knowledge, Neuro Care Foundation is here to guide, support and empower you.',
    sw: 'Hauko peke yako. Iwe unaishi na hali ya neva, unamlea mtu, au unatafuta maarifa, Neuro Care Foundation iko hapa kukuongoza, kukusaidia na kukutia nguvu.',
  },
};