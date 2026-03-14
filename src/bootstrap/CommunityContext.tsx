// src/bootstrap/CommunityContext.tsx
import { createContext, useContext, useEffect, useState } from 'react';
import { DEMO_COMMUNITY } from '@/demo/community';

type CommunityData = typeof DEMO_COMMUNITY;

const CommunityContext = createContext<{ community: CommunityData | null; loading: boolean }>({
  community: null,
  loading: true,
});

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const [community, setCommunity] = useState<CommunityData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // simulate async load
    setTimeout(() => {
      setCommunity(DEMO_COMMUNITY);
      setLoading(false);
    }, 50); // almost instant
  }, []);

  return (
    <CommunityContext.Provider value={{ community, loading }}>
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  return useContext(CommunityContext);
}
