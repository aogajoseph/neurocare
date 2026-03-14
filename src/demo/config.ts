export const DEMO_CONFIG = {
  app: {
    name: 'Neuro Care',
    environment: 'demo',
  },

  i18n: {
    default: 'en',
    supported: [
      { code: 'en', label: 'English' },
      { code: 'sw', label: 'Swahili' },
    ],
  },

  share: {
    title: 'Neuro Care App',
    message:
      'Explore neurological care, community support and trusted guidance.',
    url: 'https://ncf-backend.onrender.com/app.apk',
  },

  drawer: {
    sections: [
      {
        id: 'learn',
        title: 'Learn',
        items: [
          {
            id: 'neurology',
            label: 'Understanding Neurology',
            icon: 'brain-outline',
            target: 'learn/neurology',
          },
          {
            id: 'caregiver',
            label: 'Caregiver Guide',
            icon: 'people-outline',
            target: 'learn/caregiver',
          },
          {
            id: 'living',
            label: 'Living Well with a Condition',
            icon: 'heart-outline',
            target: 'learn/living',
          },
          {
            id: 'myths',
            label: 'Myths and Facts',
            icon: 'help-buoy-outline',
            target: 'learn/myths',
          },
        ],
      },
      {
        id: 'support',
        title: 'Support and Safety',
        items: [
          {
            id: 'help',
            label: 'Help and Support',
            icon: 'help-circle-outline',
            target: 'support/help',
          },
          {
            id: 'emergency',
            label: 'Emergency Resources',
            icon: 'alert-circle-outline',
            target: 'support/emergency',
          },
          {
            id: 'report',
            label: 'Report a Concern',
            icon: 'flag-outline',
            target: 'support/report',
          },
        ],
      },
      {
        id: 'about',
        title: 'About the App',
        items: [
          {
            id: 'platform',
            label: 'The Neuro Care Platform',
            icon: 'information-circle-outline',
            target: 'about/platform',
          },
          {
            id: 'how',
            label: 'How This App Works',
            icon: 'walk-outline',
            target: 'about/how',
          },
          {
            id: 'data',
            label: 'Data Sources',
            icon: 'server-outline',
            target: 'about/data',
          },
          {
            id: 'version',
            label: 'Version and Updates',
            icon: 'git-branch-outline',
            target: 'about/version',
          },
        ],
      },
      {
        id: 'more',
        title: 'More',
        items: [
          {
            id: 'terms',
            label: 'Terms and Conditions',
            icon: 'document-text-outline',
            target: 'legal/terms',
          },
          {
            id: 'privacy',
            label: 'Privacy Policy',
            icon: 'lock-closed-outline',
            target: 'legal/privacy',
          },
          {
            id: 'child',
            label: 'Child Protection',
            icon: 'shield-checkmark-outline',
            target: 'legal/child-protection',
          },
        ],
      },
    ],
  },

  features: {
    community: true,
    assistant: true,
    donations: false,
  },
};
