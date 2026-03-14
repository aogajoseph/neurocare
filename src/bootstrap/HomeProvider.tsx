// src/bootstrap/HomeProvider.tsx
import { useState, useEffect } from 'react';
import { HomeContext, HomeData } from './HomeContext';
import { DEMO_HOME } from '@/demo/home';

export function HomeProvider({ children }: { children: React.ReactNode }) {
  const [home, setHome] = useState<HomeData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate async load, can remove setTimeout for instant load
    setTimeout(() => {
      setHome(DEMO_HOME);
      setLoading(false);
    }, 100); // 100ms delay to mimic real loading
  }, []);

  return (
    <HomeContext.Provider value={{ home, loading }}>
      {children}
    </HomeContext.Provider>
  );
}
