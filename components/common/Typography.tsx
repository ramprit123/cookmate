import { Text } from 'react-native';
import { ReactNode } from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'body' | 'small';
  children: ReactNode;
  className?: string;
}

const Typography = ({ variant = 'body', children, className = '' }: TypographyProps) => {
  const baseStyles = 'text-gray-900';

  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-semibold',
    h4: 'text-xl font-semibold',
    body: 'text-base',
    small: 'text-sm',
  };

  return <Text className={`${baseStyles} ${variantStyles[variant]} ${className}`}>{children}</Text>;
};

export default Typography;
