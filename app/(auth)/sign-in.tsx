import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { Button } from '~/components/Button';
import { supabase } from '~/utils/supabase';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSignIn = async () => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      router.replace('/');
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="flex-1 justify-center">
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?q=80&w=200&auto=format',
          }}
          className="w-24 h-24 rounded-full self-center mb-8"
        />

        <Text className="text-3xl font-bold text-center mb-8 font-['Inter_700Bold']">
          Welcome Back
        </Text>

        {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}

        <View className="space-y-4 flex gap-6">
          <View className="flex-row items-center border border-gray-300 rounded-lg p-4">
            <MaterialCommunityIcons name="email" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Email"
              value={email}
              onChangeText={setEmail}
              autoCapitalize="none"
              className="flex-1 ml-1"
            />
          </View>

          <View className="flex-row items-center border border-gray-300 rounded-lg p-4">
            <MaterialCommunityIcons name="lock" size={20} color="#9CA3AF" />
            <TextInput
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              className="flex-1 ml-1"
            />
          </View>

          <Button onPress={handleSignIn} disabled={loading} title="Sign In"></Button>
        </View>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <Link href="/sign-up" className="text-primary font-['Inter_600SemiBold']">
            Sign Up
          </Link>
        </View>
      </View>
    </View>
  );
}
