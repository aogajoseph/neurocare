import { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { demoUsers } from '@/demo/users';

interface User {
  username?: string;
  email?: string;
  phone?: string;
  isAnonymous: boolean;
}

interface AuthContextValue {
  loading: boolean;
  status: 'anonymous' | 'authenticated';
  user: User;
  signIn: (identifier: string, password: string) => Promise<boolean>;
  signOut: () => Promise<void>;
}

const AUTH_KEY = 'authState';

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const [status, setStatus] = useState<'anonymous' | 'authenticated'>('anonymous');
  const [user, setUser] = useState<User>({ isAnonymous: true });

  useEffect(() => {
    const loadAuth = async () => {
      try {
        const stored = await AsyncStorage.getItem(AUTH_KEY);
        if (stored) {
          const parsed = JSON.parse(stored);
          setStatus(parsed.status);
          setUser(parsed.user);
        }
      } catch (e) {
        console.warn(e);
      } finally {
        setLoading(false);
      }
    };
    loadAuth();
  }, []);

  const persist = async (nextStatus: 'anonymous' | 'authenticated', nextUser: User) => {
    await AsyncStorage.setItem(AUTH_KEY, JSON.stringify({ status: nextStatus, user: nextUser }));
  };

  const signIn = async (identifier: string, password: string) => {
    // demo lookup: match email, phone, or username
    const found = demoUsers.find(
      (u) =>
        (u.email === identifier || u.phone === identifier || u.username === identifier) &&
        u.password === password
    );

    if (!found) return false;

    const nextUser: User = {
      username: found.username,
      email: found.email,
      phone: found.phone,
      isAnonymous: false,
    };

    setStatus('authenticated');
    setUser(nextUser);
    await persist('authenticated', nextUser);

    return true;
  };

  const signOut = async () => {
    const anonUser: User = { isAnonymous: true };
    setStatus('anonymous');
    setUser(anonUser);
    await persist('anonymous', anonUser);
  };

  return (
    <AuthContext.Provider value={{ loading, status, user, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
