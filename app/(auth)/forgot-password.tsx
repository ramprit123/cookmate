import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useState } from 'react';
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { supabase } from '~/utils/supabase';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleResetPassword = async () => {
    try {
      setLoading(true);
      setError(null);

      const { error } = await supabase.auth.resetPasswordForEmail(email);

      if (error) throw error;

      setSuccess(true);
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
          Reset Password
        </Text>

        {error && <Text className="text-red-500 text-center mb-4">{error}</Text>}

        {success ? (
          <View className="space-y-4">
            <Text className="text-center text-green-600">
              Password reset instructions have been sent to your email.
            </Text>
            <Link href="/sign-in" className="text-primary text-center font-['Inter_600SemiBold']">
              Back to Sign In
            </Link>
          </View>
        ) : (
          <View className="space-y-4">
            <View className="flex-row items-center border border-gray-300 rounded-lg p-3">
              <MaterialCommunityIcons name="email" size={20} color="#9CA3AF" />

              <TextInput
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
                autoCapitalize="none"
                className="flex-1"
              />
            </View>

            <TouchableOpacity
              onPress={handleResetPassword}
              disabled={loading}
              className="bg-primary py-3 rounded-lg"
            >
              <Text className="text-white text-center font-['Inter_600SemiBold']">
                {loading ? 'Sending Instructions...' : 'Send Reset Instructions'}
              </Text>
            </TouchableOpacity>

            <Link href="/sign-in" className="text-primary text-center font-['Inter_600SemiBold']">
              Back to Sign In
            </Link>
          </View>
        )}
      </View>
    </View>
  );
}
