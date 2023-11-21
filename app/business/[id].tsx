import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from '@Components/ui/core';

const BusinessDetailScreen = ({ route }) => {
  // Extract business details from route parameters
  const { business } = route.params;

  return (
    <ScrollView className="bg-white p-4">
      <Image source={{ uri: business.logo }} className="w-full h-48 mb-4" />

      <Text className="text-2xl font-bold mb-2">{business.name}</Text>

      <Text className="text-gray-500 mb-4">{business.address}</Text>

      <Text className="text-lg mb-2">Description:</Text>
      <Text>{business.description}</Text>

      <Text className="text-lg mb-2">Operating Hours:</Text>
      <Text>{JSON.stringify(business.operatingHours, null, 2)}</Text>

      <Text className="text-lg mb-2">Contact Information:</Text>
      <Text>{business.phone}</Text>
      <Text>{business.email}</Text>

      <Text className="text-lg mb-2">Social Media:</Text>
      <Text>{business.socialMedia.facebook}</Text>
      <Text>{business.socialMedia.instagram}</Text>
      <Text>{business.socialMedia.twitter}</Text>

      {/* Add more sections for business details as needed */}

      {/* Map Section */}
      <View style={{ height: 200, marginBottom: 16 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: business.latitude,
            longitude: business.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02,
          }}>
          <Marker
            coordinate={{
              latitude: business.latitude,
              longitude: business.longitude,
            }}
            title={business.name}
            description={business.address}
          />
        </MapView>
      </View>

      <TouchableOpacity className="bg-blue-500 p-2 rounded-md mt-4">
        <Text className="text-white">Back to Home</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default BusinessDetailScreen;
