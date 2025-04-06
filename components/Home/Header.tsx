import { Pressable, Text, View } from 'react-native';
import { useStore } from '~/store/store';
import Avatar from '~/components/Avatar';
import { useState } from 'react';

const Header = () => {
  const { user } = useStore();
  const [isVeg, setIsVeg] = useState<boolean>(false);
  return (
    <View className="flex flex-row bg-white p-4">
      <Avatar user={user} />
      <View className="flex-1 flex-row items-center justify-end">
        <View className="flex-row items-center bg-gray-200 rounded-full p-1">
          <Pressable
            className={`px-4 py-2 rounded-full ${isVeg ? 'bg-green-500' : ''}`}
            onPress={() => setIsVeg(true)}
          >
            <Text className={`${isVeg ? 'text-white' : 'text-gray-700'}`}>Veg</Text>
          </Pressable>
          <Pressable
            className={`px-4 py-2 rounded-full ${!isVeg ? 'bg-red-500' : ''}`}
            onPress={() => setIsVeg(false)}
          >
            <Text className={`${!isVeg ? 'text-white' : 'text-gray-700'}`}>Non-Veg</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default Header;
