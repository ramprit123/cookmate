import { TextInput, View, Text, TextInputProps } from 'react-native';
import { forwardRef } from 'react';

interface InputProps extends TextInputProps {
  label?: string;
  error?: string;
  containerClassName?: string;
}

const Input = forwardRef<TextInput, InputProps>(
  ({ label, error, containerClassName = '', className = '', ...props }, ref) => {
    return (
      <View className={`w-full ${containerClassName}`}>
        {label && <Text className="text-gray-700 text-sm mb-1 font-medium">{label}</Text>}
        <TextInput
          ref={ref}
          className={`w-full px-4 py-3 rounded-lg bg-white border border-gray-300 
            focus:border-green-500 text-base ${error ? 'border-red-500' : ''} ${className}`}
          placeholderTextColor="#9CA3AF"
          {...props}
        />
        {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
      </View>
    );
  }
);

export default Input;
