import { useEffect, useState } from 'react';
import { Stack, Redirect } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { ConfigProvider } from '@/bootstrap/ConfigProvider';
import { HomeProvider } from '@/bootstrap/HomeProvider';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { AuthProvider } from '@/auth/AuthContext';
import { CommunityProvider } from '@/bootstrap/CommunityContext';

export default function RootLayout() {
  const [introSeen, setIntroSeen] = useState<boolean | null>(null);

  useEffect(() => {
    const checkIntro = async () => {
      if (__DEV__) {
        console.log('[DEV] Clearing introSeen for testing...');
        await AsyncStorage.removeItem('introSeen');
      }

      const seen = await AsyncStorage.getItem('introSeen');
      setIntroSeen(!!seen);
    };

    checkIntro();
  }, []);

  // Still loading storage → render nothing yet
  if (introSeen === null) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <ConfigProvider>
        <HomeProvider>
          <LanguageProvider>
            <AuthProvider>
              <CommunityProvider>
                {!introSeen && <Redirect href="/(intro)" />}
                <Stack screenOptions={{ headerShown: false }} />
              </CommunityProvider>
            </AuthProvider>
          </LanguageProvider>
        </HomeProvider>
      </ConfigProvider>
    </SafeAreaProvider>
  );
}
