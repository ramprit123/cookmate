import { View } from 'react-native';
import { Button } from '~/components/Button';

const SignIn = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
      <Button title="Sign in with Google" />
    </View>
  );
};

export default SignIn;
