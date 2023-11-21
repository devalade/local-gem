import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from '../../components/ui/core';
import { Input } from '@Components/Input';
import { Button } from '@Components/button';

const RecommendationFormScreen = () => {
  const router = useRouter();
  const [state, setState] = useState<'form' | 'preview'>('form');
  const [businessName, setBusinessName] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  // Add more state variables for other details

  const onPreview = () => {
    if (businessName && businessAddress) {
      setState('preview');
    }
  };

  const onSubmit = () => {
    console.warn('All data');
    router.push('/home');
  };

  return (
    <View>
      {state == 'form' && (
        <View className="p-3">
          <View className="mt-4">
            <View className="">
              <Input
                label="Busniess Name"
                value={businessName}
                onChangeText={(text: string) => setBusinessName(text)}
                placeholder="Business name"
              />
            </View>
            <View className="mt-3">
              <Input
                label="Busniess Address"
                value={businessAddress}
                onChangeText={(text) => setBusinessAddress(text)}
                placeholder="Business name"
              />
            </View>
          </View>
          {/* Add more input fields for other details */}
          <View className="mt-8">
            <Button onPress={onPreview} label="Preview" />
          </View>
        </View>
      )}
      {state == 'preview' && (
        <View style={{ padding: 16 }}>
          <Text style={{ fontSize: 24, marginBottom: 16 }}>Preview</Text>
          <Info label="Business Name" value={businessName} />
          <Info label="Business Adress" value={businessAddress} />

          <Button onPress={onSubmit} label="Save" className="mt-6" />
        </View>
      )}
    </View>
  );
};

export default RecommendationFormScreen;

function Info({ label, value }: { label: string; value?: string }) {
  return (
    <View className="flex-row justify-between items-center mb-2">
      <Text className="text-gray-600 font-semibold">{label}:</Text>
      <Text>{value ?? ''}</Text>
    </View>
  );
}
