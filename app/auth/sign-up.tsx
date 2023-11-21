import { Link, useRouter } from 'expo-router';
import React from 'react';
import { View, Text, TextInput, Button, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const SignupScreen = () => {
  const router = useRouter();

  function onSubmit() {
    console.warn('Submitted successfully');
    router.push('/home');
  }
  return (
    <View className="flex-1 w-full bg-white p-4 justify-between">
      <View className="w-full  my-auto">
        <Text className="font-bold text-4xl uppercase  text-gray-800">Sign up</Text>

        <View className="mt-8">
          <TextInput className="bg-gray-200 p-2 rounded-md w-full" placeholder="Fullname" />
        </View>

        <View className="mt-4">
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
          <Pressable onPress={onSubmit} className=" items-center p-3 bg-indigo-600 rounded-3xl ">
            <Text className="text-indigo-50 text-lg"> Sign up </Text>
          </Pressable>
        </View>

        <View className="mt-4 flex-row justify-between">
          <Link href="/auth/sign-in">
            <TouchableOpacity>
              <Text className="text-gray-500">Forgot Password?</Text>
            </TouchableOpacity>
          </Link>
          <Link href={'/auth/sign-in'}>
            <TouchableOpacity>
              <Text className="text-gray-500">Sign In</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default SignupScreen;
