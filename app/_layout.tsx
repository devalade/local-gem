import { Feather } from '@expo/vector-icons';
import { Stack, useRouter } from 'expo-router';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  const router = useRouter();

  const BackButton = () => (
    <TouchableOpacity onPress={router.back}>
      <View className={styles.backButton}>
        <Feather name="chevron-left" size={16} color="#007AFF" />
        <Text className={styles.backButtonText}>Back</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaProvider>
      <Stack>
        <Stack.Screen name="index" options={{ title: 'Onboarding', headerShown: false }} />
        <Stack.Screen name="auth/sign-in" options={{ title: 'Sign in', headerShown: false }} />
        <Stack.Screen name="auth/sign-up" options={{ title: 'Sign up', headerShown: false }} />
        <Stack.Screen name="home" options={{ title: 'Home', headerShown: false }} />
        <Stack.Screen name="recommendation/create" options={{ title: 'New Recommendation' }} />

        <Stack.Screen
          name="details"
          options={{ title: 'Details', headerLeft: () => <BackButton /> }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}

const styles = {
  backButton: 'flex-row',
  backButtonText: 'text-blue-500 ml-1',
};
