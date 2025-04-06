import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import Header from '~/components/Home/Header';
import Search from '~/components/Home/Search';

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar style="auto" />
      <Header />
      <Search />
    </SafeAreaView>
  );
}
