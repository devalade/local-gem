import { Link } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = () => {
  return (
    <View className="flex-1 w-full bg-white p-4 justify-between">
      <View className="w-full  my-auto">
        <Text className="font-bold text-4xl uppercase  text-gray-800">Login</Text>

        <View className="mt-8">
          <TextInput className="bg-gray-200 p-2 rounded-md w-full" placeholder="Email" />
        </View>

        <View className="mt-4">
          <TextInput
            className="bg-gray-200 p-2 rounded-md w-full"
            placeholder="Password"
            secureTextEntry={true}
          />
        </View>

        <View className="mt-8">
          <TouchableOpacity className=" items-center p-3 bg-indigo-600 rounded-3xl ">
            <Text className="text-indigo-50 text-lg"> Sign in </Text>
          </TouchableOpacity>
        </View>

        <View className="mt-4 flex-row justify-between">
          <Link href="/auth/sign-in">
            <TouchableOpacity>
              <Text className="text-gray-500">Forgot Password?</Text>
            </TouchableOpacity>
          </Link>
          <Link href={'/auth/sign-up'}>
            <TouchableOpacity>
              <Text className="text-gray-500">Sign Up</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
