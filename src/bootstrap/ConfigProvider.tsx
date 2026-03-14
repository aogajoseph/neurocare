import { useEffect, useState } from 'react';
import { ConfigContext, AppConfig } from './ConfigContext';
import { LanguageProvider } from '@/i18n/LanguageContext';
import { DEMO_CONFIG } from '@/demo/config';

export function ConfigProvider({ children }: { children: React.ReactNode }) {
  const [config, setConfig] = useState<AppConfig | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Load demo config instantly
    setConfig(DEMO_CONFIG);
    setLoading(false);
  }, []);

  return (
    <ConfigContext.Provider value={{ config, loading }}>
      <LanguageProvider>{children}</LanguageProvider>
    </ConfigContext.Provider>
  );
}
