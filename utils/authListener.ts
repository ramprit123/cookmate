import { useStore } from '~/store/store';
import { supabase } from './supabase';

export const addAuthStateChangeListener = () => {
  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    useStore.getState().setSession(session);
    useStore.getState().setUser(session?.user ?? null);
  });

  return () => {
    subscription.unsubscribe();
  };
};
