import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';

const RecommendationList = ({ recommendations }) => {
  return (
    <ScrollView className="mt-4">
      {recommendations.map(recommendation => (
        <TouchableOpacity key={recommendation.id} className="mb-4 p-4 rounded-md border-2 border-indigo-600 bg-indigo-50">
          <Text className="text-2xl font-bold">{recommendation.name}</Text>
          <Text className="text-gray-500">{recommendation.address}</Text>
          {/* Add more details or customize the card structure based on your data */}
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default RecommendationList;

