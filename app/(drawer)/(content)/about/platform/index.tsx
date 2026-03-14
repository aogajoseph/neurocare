import { useEffect } from 'react';
import { router } from 'expo-router';

export default function PlatformIndexRedirect() {
  useEffect(() => {
    router.replace('/about/platform/overview');
  }, []);

  return null;
}
