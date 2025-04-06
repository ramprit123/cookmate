import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Stack } from 'expo-router';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { ThemeProvider } from '~/components/ThemeContext';
import { UserProvider } from '~/context/UserContext';
import '../global.css';

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <UserProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
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
                name="(auth)"
              ></Stack.Screen>
            </Stack>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </UserProvider>
  );
}
