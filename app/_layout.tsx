import { UserProvider } from '~/context/UserContext';
import '../global.css';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Stack } from 'expo-router';
import { ThemeProvider } from '~/components/ThemeContext';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

export default function Layout() {
  return (
    <UserProvider>
      <ThemeProvider>
        <GestureHandlerRootView>
          <QueryClientProvider client={queryClient}>
            <Stack>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="welcome"
              ></Stack.Screen>
            </Stack>
          </QueryClientProvider>
        </GestureHandlerRootView>
      </ThemeProvider>
    </UserProvider>
  );
}
