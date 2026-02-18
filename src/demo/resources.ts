export type ResourceCard = {
  id: string;
  title: {
    en: string;
    sw: string;
  };
  subtitle: {
    en: string;
    sw: string;
  };
  icon: string;
  route: string;
};

export type ResourceSection = {
  id: string;
  title: {
    en: string;
    sw: string;
  };
  cards: ResourceCard[];
};

export const resourcesMeta = {
  title: {
    en: 'Resources',
    sw: 'Rasilimali',
  },
  subtitle: {
    en: 'Learn, explore and discover supportive tools & knowledge',
    sw: 'Jifunze, chunguza na gundua maarifa na msaada',
  },
};

export const resourcesSections: ResourceSection[] = [
  /**
   * 📚 Explore
   */
  {
    id: 'explore',
    title: {
      en: 'Explore',
      sw: 'Chunguza',
    },
    cards: [
      {
        id: 'articles',
        title: {
          en: 'Articles',
          sw: 'Makala',
        },
        subtitle: {
          en: 'Insights, education & awareness',
          sw: 'Maarifa, elimu na uelewa',
        },
        icon: 'document-text-outline',
        route: '/(drawer)/(resources)/articles',
      },
      {
        id: 'questionnaires',
        title: {
          en: 'Questionnaires',
          sw: 'Dodoso',
        },
        subtitle: {
          en: 'Self-check tools & assessments',
          sw: 'Zana za kujipima',
        },
        icon: 'help-circle-outline',
        route: '/(drawer)/(resources)/questionnaires',
      },
      {
        id: 'talks',
        title: {
          en: 'Talks',
          sw: 'Majadiliano',
        },
        subtitle: {
          en: 'Expert discussions & insights',
          sw: 'Majadiliano ya wataalamu',
        },
        icon: 'chatbubbles-outline',
        route: '/(drawer)/(resources)/talks',
      },
      {
        id: 'training-videos',
        title: {
          en: 'Training Videos',
          sw: 'Video za Mafunzo',
        },
        subtitle: {
          en: 'Practical skills & guidance',
          sw: 'Ujuzi na mwongozo wa vitendo',
        },
        icon: 'play-circle-outline',
        route: '/(drawer)/(resources)/training-videos',
      },
    ],
  },

  /**
   * 🎥 Media
   */
  {
    id: 'media',
    title: {
      en: 'Media',
      sw: 'Vyombo vya Habari',
    },
    cards: [
      {
        id: 'recorded-webinars',
        title: {
          en: 'Recorded Webinars',
          sw: 'Webina Zilizorekodiwa',
        },
        subtitle: {
          en: 'Watch expert-led sessions',
          sw: 'Tazama vipindi vya wataalamu',
        },
        icon: 'videocam-outline',
        route: '/(drawer)/(resources)/webinars',
      },
      {
        id: 'podcast',
        title: {
          en: 'Neuro Connect',
          sw: 'Podkasti ya Neuro Connect',
        },
        subtitle: {
          en: 'Stories, insights & conversations',
          sw: 'Hadithi na mazungumzo',
        },
        icon: 'mic-outline',
        route: '/(drawer)/(resources)/podcast',
      },
    ],
  },

  /**
   * 🤝 Get Involved
   */
  {
    id: 'get-involved',
    title: {
      en: 'Get Involved',
      sw: 'Shiriki',
    },
    cards: [
      {
        id: 'donate',
        title: {
          en: 'Donate',
          sw: 'Changia',
        },
        subtitle: {
          en: 'Support patients & programs',
          sw: 'Saidia wagonjwa na programu',
        },
        icon: 'heart-outline',
        route: '/(drawer)/(resources)/donate',
      },
      {
        id: 'volunteer',
        title: {
          en: 'Volunteer',
          sw: 'Jitolee',
        },
        subtitle: {
          en: 'Offer your time & skills',
          sw: 'Toa muda na ujuzi wako',
        },
        icon: 'people-outline',
        route: '/(drawer)/(resources)/volunteer',
      },
      {
        id: 'partnerships',
        title: {
          en: 'Partnerships',
          sw: 'Ushirikiano',
        },
        subtitle: {
          en: 'Collaborate with NCF',
          sw: 'Shirikiana na NCF',
        },
        icon: 'handshake-outline',
        route: '/(drawer)/(resources)/partnerships',
      },
      {
        id: 'events',
        title: {
          en: 'Events',
          sw: 'Matukio',
        },
        subtitle: {
          en: 'Upcoming & past activities',
          sw: 'Matukio yajayo na yaliyopita',
        },
        icon: 'calendar-outline',
        route: '/(drawer)/(resources)/events',
      },
    ],
  },

  /**
   * 🏛 Neuro Care Foundation
   */
  {
    id: 'ncf',
    title: {
      en: 'Neuro Care Foundation',
      sw: 'Neuro Care Foundation',
    },
    cards: [
      {
        id: 'about',
        title: {
          en: 'About',
          sw: 'Kuhusu',
        },
        subtitle: {
          en: 'Who we are & what we do',
          sw: 'Sisi ni nani na tunafanya nini',
        },
        icon: 'information-circle-outline',
        route: '/(drawer)/(resources)/about-ncf',
      },
    ],
  },
];
