// src/demo/auth.ts

export const DEMO_USER_ANONYMOUS = {
  id: null,
  name: 'Guest User',
  email: null,
  username: null,
  isAnonymous: true,
};

export const DEMO_USER_AUTHENTICATED = {
  id: 'u_123',
  name: 'John Doe',
  email: 'john@doe.com',
  username: 'johndoe',
  isAnonymous: false,
};

// Menu is only available for authenticated users
export const DEMO_MENU = [
  {
    id: 'profile',
    label: 'My Profile',
    icon: 'person-outline',
    action: {
      type: 'navigate',
      target: '(tabs)/profile',
    },
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: 'settings-outline',
    action: {
      type: 'navigate',
      target: '(tabs)/settings',
    },
  },
  {
    id: 'help',
    label: 'Help & Support',
    icon: 'help-circle-outline',
    action: {
      type: 'navigate',
      target: '(tabs)/support',
    },
  },
  {
    id: 'logout',
    label: 'Sign Out',
    icon: 'log-out-outline',
    action: {
      type: 'auth',
      target: 'logout',
    },
  },
];

/**
 * Helper to get the "current user" for the demo.
 * Pass `true` to simulate anonymous user, `false` for authenticated.
 */
export function getDemoUser(isAnonymous = true) {
  return {
    user: isAnonymous ? DEMO_USER_ANONYMOUS : DEMO_USER_AUTHENTICATED,
    menu: isAnonymous ? [] : DEMO_MENU,
  };
}
