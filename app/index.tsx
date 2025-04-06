import { Stack, useRouter } from 'expo-router';

import { Button } from '~/components/Button';
import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Stack.Screen
        options={{
          headerTitle: 'Home',
          headerTitleAlign: 'center',
          headerShown: false,
        }}
      />
      <Container>
        <ScreenContent path="app/index.tsx" title="Home" />
        <Button title="Show Details" onPress={() => router.replace('/welcome')} />
      </Container>
    </>
  );
}
