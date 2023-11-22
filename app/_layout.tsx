import { SessionProvider } from '@Utils/ctx';
import { Slot } from 'expo-router';

export default function Layout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}
