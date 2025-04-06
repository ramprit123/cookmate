import { FC } from 'react';
import { Text, View } from 'react-native';
interface Props {
  user: any;
}
const Avatar: FC<Props> = ({ user }) => {
  return (
    <View
      className="w-10 h-10 rounded-full items-center justify-center"
      style={{
        backgroundColor: user?.user_metadata?.name?.[0]
          ? `hsl(${user.user_metadata.name[0].toLowerCase().charCodeAt(0) * 7}, 70%, 80%)`
          : '#d1d5db',
      }}
    >
      <Text
        className="text-lg font-semibold"
        style={{
          color: user?.user_metadata?.name?.[0]
            ? `hsl(${user.user_metadata.name[0].toLowerCase().charCodeAt(0) * 7}, 60%, 30%)`
            : '#4b5563',
        }}
      >
        {user?.user_metadata?.name?.[0]?.toUpperCase() || '?'}
      </Text>
    </View>
  );
};

export default Avatar;
