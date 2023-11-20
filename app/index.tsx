import { Link } from 'expo-router';
import { Image } from 'expo-image';
import { Text, TouchableOpacity, View } from 'react-native';

const blurhash =
  '|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[';

export default function Page() {
  return (
    <View className={styles.container}>
      <Image
        className='h-full w-full absolute inset-0'
        source={require('../assets/onboarding.png')}
        contentFit="cover"
        transition={1000}
        placeholder={blurhash}
      />
      <View className={styles.main}>
        <View>
          <Text className={styles.title}>Hello World</Text>
          <Text className={styles.subtitle}>Onboarding</Text>
        </View>
        <Link href="auth/login" asChild>
          <TouchableOpacity className={styles.button}>
            <Text className={styles.buttonText}>Login</Text>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
}

const styles = {
  button: 'items-center bg-indigo-600 rounded-[28px] shadow-md p-4',
  buttonText: 'text-white text-lg font-semibold text-center',
  container: 'flex-1 p-6 relative',
  main: 'flex-1 max-w-[960] justify-between',
  title: 'text-[64px] font-bold',
  subtitle: 'text-4xl text-gray-700',
};
