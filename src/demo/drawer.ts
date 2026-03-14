// src/demo/drawer.ts
export const DEMO_DRAWER_SECTIONS = [
  {
    id: 'learn',
    title: 'Learn',
    items: [
      { id: 'neurology', label: 'Understanding Neurology', icon: 'brain-outline', target: 'learn/neurology' },
      { id: 'living', label: 'Living Well with a Condition', icon: 'heart-outline', target: 'learn/living' },
      { id: 'caregiver', label: 'Caregiver Guide', icon: 'people-outline', target: 'learn/caregiver' },
      { id: 'myths', label: 'Myths and Facts', icon: 'help-buoy-outline', target: 'learn/myths' },
    ],
  },
  {
    id: 'support',
    title: 'Support and Safety',
    items: [
      { id: 'help', label: 'Help and Support', icon: 'help-circle-outline', target: 'support/help' },
      { id: 'emergency', label: 'Emergency Resources', icon: 'alert-circle-outline', target: 'support/emergency' },
      { id: 'report', label: 'Report a Concern', icon: 'flag-outline', target: 'support/report' },
    ],
  },
  {
    id: 'about',
    title: 'About the App',
    items: [
      { id: 'platform', label: 'The Neuro Care Platform', icon: 'information-circle-outline', target: 'about/platform' },
      { id: 'how', label: 'How This App Works', icon: 'walk-outline', target: 'about/how' },
      { id: 'data', label: 'Data Sources', icon: 'server-outline', target: 'about/data' },
      { id: 'version', label: 'Version and Updates', icon: 'git-branch-outline', target: 'about/version' },
    ],
  },
  {
    id: 'more',
    title: 'More',
    items: [
      { id: 'terms', label: 'Terms and Conditions', icon: 'document-text-outline', target: 'legal/terms' },
      { id: 'privacy', label: 'Privacy Policy', icon: 'lock-closed-outline', target: 'legal/privacy' },
      { id: 'child', label: 'Child Protection', icon: 'shield-checkmark-outline', target: 'legal/child-protection' },
    ],
  },
];

// src/demo/languages.ts
export const DEMO_LANGUAGES = [
  { code: 'en', label: 'English' },
  { code: 'sw', label: 'Swahili' },
];

// src/demo/profile.ts
export const DEMO_USER = {
  id: 'demo',
  name: 'Guest User',
  email: 'guest@example.com',
  isAnonymous: true,
};

export const DEMO_MENU = [
  { id: 'profile', label: 'My Profile', icon: 'person-outline', action: { type: 'navigate', target: 'profile' } },
  { id: 'settings', label: 'Settings', icon: 'settings-outline', action: { type: 'navigate', target: 'settings' } },
];
