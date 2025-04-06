import { useRouter } from 'expo-router';
import { useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { useStore } from '~/store/store';

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
      useStore.getState().setSession(session);
      useStore.getState().setUser(session?.user ?? null);
      useStore.getState().setLoading(false);
      router.replace('/(tabs)');
    } else {
      router.replace('/welcome');
    }
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <ActivityIndicator size="large" />
    </View>
  );
}
