import { Stack } from 'expo-router'
import { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
} from 'react-native'

type Item = {
  id: string
  value: string
}

const Home = () => {
  const [items, setItems] = useState<Array<Item>>([])
  const [value, setValue] = useState('')

  function onAddItem() {
    const newItem = {
      id: Math.random()
        .toString(36)
        .substring(2, items.length + 2),
      value,
    }

    setItems((prevItems) => [...prevItems, newItem])
    setValue('')
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Stack.Screen options={{ title: 'Todo App' }} />

      <View style={{ rowGap: 30, flexDirection: 'column' }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            columnGap: 10,
            marginTop: 15,
          }}
        >
          <TextInput
            style={{
              backgroundColor: 'pink',
              width: '80%',
              borderRadius: 5,
              paddingHorizontal: 4,
              color: 'black',
            }}
            value={value}
            onChangeText={setValue}
            placeholder="Do dishes..."
          />
          <TouchableOpacity
            style={{
              backgroundColor: 'gray',
              borderRadius: 4,
              paddingVertical: 4,
              paddingHorizontal: 8,
            }}
            onPress={onAddItem}
          >
            <Text style={{ fontWeight: '500', color: 'white' }}>Add</Text>
          </TouchableOpacity>
        </View>

        <View style={{ flexDirection: 'column', rowGap: 5 }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Text>{item.value}</Text>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
