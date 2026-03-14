import { useEffect, useState } from 'react';
import { DEMO_CONFIG } from '@/demo/config';

export function useApp() {
  const [config, setConfig] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 🔹 Load demo config instantly
    setConfig(DEMO_CONFIG);
    setLoading(false);
  }, []);

  return { config, loading, error: null };
}
