import { forwardRef } from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';

type ButtonProps = {
  title: string;
} & TouchableOpacityProps;

export const Button = forwardRef<View, ButtonProps>(({ title, ...touchableProps }, ref) => {
  return (
    <TouchableOpacity
      ref={ref}
      {...touchableProps}
      className={`${styles.button} ${touchableProps.className}`}
    >
      <Text className={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
});

const styles = {
  button:
    'items-center justify-center bg-green-600 hover:bg-green-700 active:bg-green-800 rounded-[28px] shadow-sm p-4 transition-colors duration-200 min-w-[120px]',
  buttonText: 'text-white text-lg font-semibold text-center tracking-wide',
};
