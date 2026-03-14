// src/auth/auth.api.ts
import { DEMO_USER, DEMO_MENU } from '@/demo/auth';

export async function fetchProfile() {
  return { user: DEMO_USER, menu: DEMO_MENU };
}

export async function savePreferences(prefs: { language: string }) {
  console.log('DEMO_MODE: preferences not saved', prefs);
}
