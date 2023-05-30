import { Link, Stack } from 'expo-router'
import { SafeAreaView } from 'react-native'

const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: 'center' }}>
      <Stack.Screen options={{ title: 'Todo App' }} />

      <Link href="/details">Details</Link>
    </SafeAreaView>
  )
}

export default Home
