import { useRouter } from 'expo-router'
import { View, Text } from 'react-native'

export default function Details() {
  const router = useRouter()

  return (
    <View>
      <Text
        onPress={() => {
          router.back()
        }}
      >
        Details Screen
      </Text>
    </View>
  )
}
