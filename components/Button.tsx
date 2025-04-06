import { forwardRef } from 'react';
import {
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
  ActivityIndicator,
} from 'react-native';
import type { ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline';

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  variant?: ButtonVariant;
  loading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  size?: 'sm' | 'md' | 'lg';
}

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      title,
      variant = 'primary',
      loading = false,
      leftIcon,
      rightIcon,
      size = 'md',
      disabled,
      className = '',
      ...touchableProps
    },
    ref
  ) => {
    const variantStyles = {
      primary: 'bg-green-600 active:bg-green-700',
      secondary: 'bg-gray-600 active:bg-gray-700',
      outline: 'bg-transparent border-2 border-green-600',
    };

    const sizeStyles = {
      sm: 'px-3 py-2 min-w-[100px]',
      md: 'px-4 py-3 min-w-[120px]',
      lg: 'px-6 py-4 min-w-[140px]',
    };

    const textColorStyles = {
      primary: 'text-white',
      secondary: 'text-white',
      outline: 'text-green-600',
    };

    const isDisabled = disabled || loading;

    return (
      <TouchableOpacity
        ref={ref}
        {...touchableProps}
        disabled={isDisabled}
        className={`
          flex-row items-center justify-center rounded-[28px] shadow-sm
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${isDisabled ? 'opacity-50' : ''}
          ${className}
        `}
      >
        {loading ? (
          <ActivityIndicator color={variant === 'outline' ? '#16A34A' : '#ffffff'} size="small" />
        ) : (
          <>
            {leftIcon && <View className="mr-2">{leftIcon}</View>}
            <Text
              className={`
                text-base font-semibold text-center
                ${textColorStyles[variant]}
                ${size === 'lg' ? 'text-lg' : size === 'sm' ? 'text-sm' : 'text-base'}
              `}
            >
              {title}
            </Text>
            {rightIcon && <View className="ml-2">{rightIcon}</View>}
          </>
        )}
      </TouchableOpacity>
    );
  }
);

Button.displayName = 'Button';
