import { TouchableWithoutFeedbackProps } from 'react-native';
import { Text, TouchableOpacity } from './ui/core';

export const Button = ({
  label,
  className,
  ...rest
}: TouchableWithoutFeedbackProps & { label: string }) => {
  return (
    <TouchableOpacity className=" items-center p-3 bg-indigo-600 rounded-3xl " {...rest}>
      <Text className="text-indigo-50 text-lg"> {label} </Text>
    </TouchableOpacity>
  );
};
