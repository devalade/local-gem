import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = () => {
  return (
    <View className="flex-1 bg-white p-4">
      <View className="flex-1 items-center justify-center">
        <Text className="font-bold text-3xl text-gray-800">Login</Text>
      </View>

      <View className="mt-8">
        <TextInput
          className="bg-gray-200 p-2 rounded-md w-full"
          placeholder="Email"
        />
      </View>

      <View className="mt-4">
        <TextInput
          className="bg-gray-200 p-2 rounded-md w-full"
          placeholder="Password"
          secureTextEntry={true}
        />
      </View>

      <View className="mt-8">
        <Button title="Login" className="bg-blue-500 text-white p-2 rounded-md w-full" />
      </View>

      <View className="mt-4 flex-row justify-between">
        <Text className="text-gray-500">Forgot Password?</Text>
        <Text className="text-gray-500">Sign Up</Text>
      </View>
    </View>
  );
};

export default LoginScreen;
