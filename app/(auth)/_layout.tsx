import { Stack } from 'expo-router';

const AuthLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
        name="sign-in"
      ></Stack.Screen>
    </Stack>
  );
};

export default AuthLayout;
