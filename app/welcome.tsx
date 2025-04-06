import { Marquee } from '@animatereactnative/marquee';
import { useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { Image, Text, View } from 'react-native';
import Animated from 'react-native-reanimated';
import { Button } from '~/components/Button';

const IMAGE_LIST = [
  require('~/assets/images/1.jpg'),
  require('~/assets/images/c1.jpg'),
  require('~/assets/images/2.jpg'),
  require('~/assets/images/c2.jpg'),
  require('~/assets/images/3.jpg'),
  require('~/assets/images/c3.jpg'),
  require('~/assets/images/4.jpg'),
  require('~/assets/images/5.jpg'),
  require('~/assets/images/6.jpg'),
];

const Welcome = () => {
  const router = useRouter();
  const shuffledRows = useMemo(() => {
    return [1, 2, 3].map(() => [...IMAGE_LIST].sort(() => Math.random() - 0.4));
  }, []);

  return (
    <View>
      <StatusBar hidden />
      {shuffledRows.map((randomImages, index) => (
        <Marquee
          key={index}
          spacing={10}
          speed={0.7}
          style={{
            transform: [{ rotate: '-4deg' }],
            marginBottom: 10,
          }}
        >
          <Animated.View className="flex flex-row gap-2.5">
            {randomImages.map((item, imageIndex) => (
              <Image
                key={`${index}-${imageIndex}`}
                source={item}
                className="h-[160px] w-[160px] object-cover"
              />
            ))}
          </Animated.View>
        </Marquee>
      ))}

      <View className="mt-10 mx-10 flex items-center justify-center gap-5">
        <Text className="text-3xl text-center leading-10 font-bold">
          Cookmate AI 🥗🔍 | Find, Create & Enjoy Delicious Recipes!
        </Text>
        <Text className="text-xl text-center">
          Generate delicious recipes in seconds with the power of AI! 🍔✨
        </Text>
      </View>
      <View className="mx-10 mt-10">
        <Button title="Get Started" onPress={() => router.push('/(auth)/sign-in')} />
      </View>
    </View>
  );
};

export default Welcome;
