import { Link } from 'expo-router';
import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

const RecommendationScreen = ({ route, navigation }) => {
    // Extract business details from route parameters
    const { business } = route.params;

    return (
        <View className="flex-1 bg-white p-4">
            <ScrollView>
                <Image source={{ uri: business.image }} className="w-full h-48" />
                <Text className="text-2xl font-bold mt-4">{business.name}</Text>
                <Text className="text-gray-500">{business.address}</Text>

                {/* Additional business details */}
                <View className="mt-4">
                    <Text className="text-lg font-bold">About Us</Text>
                    <Text>{business.description}</Text>
                </View>

                <View className="mt-4">
                    <Text className="text-lg font-bold">Contact Information</Text>
                    <Text>{business.phone}</Text>
                    <Text>{business.email}</Text>
                </View>

                {/* Add more sections for business details as needed */}

                {/* Back to Home button */}
                <Link href="/home">
                    <TouchableOpacity
                        className="bg-blue-500 text-white p-2 rounded-md mt-4">
                        <Text>Back to Home</Text>
                    </TouchableOpacity>
                </Link>
            </ScrollView>
        </View>
    );
};

export default RecommendationScreen;
