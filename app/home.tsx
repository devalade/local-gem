import React from 'react';
import { View, Text, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Bell } from 'lucide-react-native';
import { RECOMMENDATIONS } from '../utils/data';
import { useRouter } from 'expo-router';

const HomeScreen = () => {
  const router = useRouter();

  return (
    <SafeAreaView className="relative flex-1 bg-white p-4">
      <View className="flex-row items-center justify-between">
        <Text className="text-gray-600 font-semibold capitalize">john Doe</Text>
        <TouchableOpacity className="h-10 w-10 rounded-full border border-gray-600  ">
          <Bell color="gray" size={24} />
        </TouchableOpacity>
      </View>

      <View className="mt-8">
        <TextInput
          className="bg-gray-200 p-2 rounded-md w-full"
          placeholder="Search for businesses"
        />
      </View>
      <View className="mt-6 flex-row items-center justify-between">
        <TouchableOpacity
          onPress={() => router.push('/recommendation/create')}
          className="text-xl p-3 rounded-full bg-indigo-600 font-semibold text-indigo-100">
          <Text className="text-indigo-50">New Recommendation</Text>
        </TouchableOpacity>
        <Text className="text-gray-600">See more </Text>
      </View>
      <ScrollView className="mt-4">
        {RECOMMENDATIONS.map((recommendation) => (
          <TouchableOpacity
            key={recommendation.id}
            className="mb-4 p-4 rounded-md border-2 border-indigo-600 bg-indigo-50">
            <View className="flex-row items-center justify-between">
              <Text className="text-2xl font-bold">{recommendation.name}</Text>
              <View className="flex-row gap-x-2">
                <Text className="text-lg text-gray-600"> {recommendation.ratings} ⭐️</Text>
              </View>
            </View>
            <Text className="text-gray-500">{recommendation.address}</Text>
            {/* Add more details or customize the card structure based on your data */}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
