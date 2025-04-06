import { create } from 'zustand';
import { Session } from '@supabase/supabase-js';
import { supabase } from '~/utils/supabase';

interface AuthState {
  session: Session | null;
  user: any | null;
  loading: boolean;
  setSession: (session: Session | null) => void;
  setUser: (user: any) => void;
  setLoading: (loading: boolean) => void;
  signOut: () => Promise<void>;
}

export const useStore = create<AuthState>(set => ({
  session: null,
  user: null,
  loading: true,
  setSession: session => set({ session }),
  setUser: user => set({ user }),
  setLoading: loading => set({ loading }),
  signOut: async () => {
    await supabase.auth.signOut();
    set({ session: null, user: null });
  },
}));
