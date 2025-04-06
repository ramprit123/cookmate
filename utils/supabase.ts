import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { useStore } from '~/store/store';

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

// Add auth state change listener
export const addAuthStateChangeListener = () => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    useStore.getState().setSession(session);
    useStore.getState().setUser(session?.user ?? null);
  });

  // Return cleanup function to unsubscribe when needed
  return () => {
    subscription.unsubscribe();
  };
};
