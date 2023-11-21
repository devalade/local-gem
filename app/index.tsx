import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Page() {
  return (
    <View className={styles.container}>
      <StatusBar style="light" />
      <View className={styles.main}>
        <View className="mt-12">
          <Text className={styles.title}>Welcome to LocalGem!</Text>
          <Text className={styles.subtitle}>
            Discover and support local businesses in your community. Start exploring a world of
            unique offerings right at your fingertips. Let's make your local experience
            extraordinary together!
          </Text>
        </View>
        <View className='space-y-2'>
          <Link href="/auth/sign-up" asChild>
            <TouchableOpacity className={styles.button}>
              <Text className={styles.buttonText}>Sign up</Text>
            </TouchableOpacity>
          </Link>
          <Link href="auth/sign-in" asChild>
            <TouchableOpacity className={styles.button}>
              <Text className={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-100 rounded-[28px] shadow-md p-4',
  buttonText: 'text-indigo-600 text-lg font-semibold text-center',
  container: 'flex-1 p-6 relative bg-indigo-600',
  main: 'flex-1 max-w-[960] justify-between',
  title: 'text-[64px] font-bold text-white',
  subtitle: 'text-xl mt-4 text-gray-700 text-white',
};
