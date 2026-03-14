// src/demo/help.ts
export const helpData = {
  hero: {
    title: { en: 'Help & Support', sw: 'Msaada na Usaidizi' },
    subtitle: {
      en: 'Access guidance, assistance, and emergency support for you or someone you care for.',
      sw: 'Pata mwongozo, msaada, na msaada wa dharura kwa wewe au mtu unayemlea.',
    },
    // optional hero image
    // image: require('../../assets/images/help-hero.jpg'),
  },
  sections: [
    {
      id: 'medical',
      type: 'text',
      title: { en: 'Medical Support', sw: 'Msaada wa Tiba' },
      content: {
        en: 'Contact healthcare providers, neurologists, and local clinics for medical guidance, therapy referrals, and treatment management.',
        sw: 'Wasiliana na watoa huduma za afya, wataalamu wa neva, na kliniki za mtaa kwa mwongozo wa matibabu, rufaa za tiba, na usimamizi wa matibabu.',
      },
    },
    {
      id: 'community',
      type: 'text',
      title: { en: 'Community Support', sw: 'Msaada wa Jamii' },
      content: {
        en: 'Join local support groups, online communities, and rehabilitation programs to share experiences, learn, and receive emotional support.',
        sw: 'Jiunge na makundi ya msaada ya mtaa, jamii za mtandaoni, na programu za urejeshaji ili kushirikiana uzoefu, kujifunza, na kupata msaada wa kihisia.',
      },
    },
    {
      id: 'emergency',
      type: 'text',
      title: { en: 'Emergency Assistance', sw: 'Msaada wa Dharura' },
      content: {
        en: 'Know emergency numbers, hotlines, and protocols for situations requiring urgent medical or social intervention.',
        sw: 'Jua namba za dharura, mistari ya msaada, na taratibu kwa hali zinazohitaji hatua ya haraka ya matibabu au kijamii.',
      },
    },
    {
      id: 'additional',
      type: 'text',
      title: { en: 'Additional Resources', sw: 'Rasilimali Zingine' },
      content: {
        en: 'Additional help and support resources will be updated dynamically based on backend content and localization settings.',
        sw: 'Rasilimali zingine za msaada na usaidizi zitasasishwa kwa nguvu kulingana na maudhui ya backend na mipangilio ya lugha.',
      },
    },
  ],
};
