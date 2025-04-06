import { useRouter } from 'expo-router';
import { useEffect } from 'react';

import { supabase } from '~/utils/supabase';

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const {
      data: { session },
    } = await supabase.auth.getSession();

    if (session) {
      router.replace('/(tabs)');
    } else {
      router.replace('/sign-in');
    }
  };

  // Return loading state or null since this is just a router component
  return null;
}
