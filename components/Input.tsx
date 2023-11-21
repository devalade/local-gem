import { View, Text } from '../components/ui/core';
import { TextInput } from 'react-native';

export const Input = ({
  label,
  placeholder,
  onChangeText,
  value,
  className,
}: {
  label?: string;
  placeholder?: string;
  onChangeText: ((text: string) => void) | undefined;
  value: string;
  className?: string;
}) => {
  return (
    <View className={className}>
      {label && <Text>{label} </Text>}
      <View className="bg-indigo-100 rounded-md p-2 border border-indigo-600">
        <TextInput
          value={value}
          onChangeText={onChangeText}
          className="bg-gray-200 p-2 rounded-md w-full"
          placeholder={placeholder ?? ''}
        />
      </View>
    </View>
  );
};
