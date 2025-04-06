import { Image, View } from 'react-native';
import { Button } from '~/components/Button';
import TextArea from '~/components/common/TextArea';
import Typography from '~/components/common/Typography';

const Search = () => {
  return (
    <View className="bg-green-100 p-4 mx-4 flex items-center rounded-lg">
      <Image source={require('~/assets/images/pan.gif')} className="h-28 w-28 object-cover" />
      <Typography variant="h2" className="mt-4 text-center">
        Worm up your stove and get cooking!
      </Typography>
      <Typography variant="body" className="text-gray-600 mt-2 text-center max-w-sm">
        Make somethings tasty and healthy with our recipes.
      </Typography>

      <TextArea placeholder="Enter your cooking notes" className="mt-4" />
      <View className="mt-4">
        <Button
          title="Generate Recipe"
          leftIcon={<Image source={require('~/assets/images/i1.png')} className="h-6 w-6" />}
        />
      </View>
    </View>
  );
};

export default Search;
