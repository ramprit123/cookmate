import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '~/components/ThemeContext';
import { UserProvider } from '~/context/UserContext';
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import '../global.css';

SplashScreen.preventAutoHideAsync();
const queryClient = new QueryClient();

export default function Layout() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <UserProvider>
      <ThemeProvider>
        <GestureHandlerRootView onLayout={onLayoutRootView}>
          <QueryClientProvider client={queryClient}>
            <Stack
              screenOptions={{
                animation: 'slide_from_right',
                animationDuration: 200,
                gestureEnabled: true,
                gestureDirection: 'horizontal',
                presentation: 'card',
              }}
            >
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="welcome"
              ></Stack.Screen>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="(tabs)"
              ></Stack.Screen>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="(auth)"
              ></Stack.Screen>
            </Stack>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </UserProvider>
  );
}
