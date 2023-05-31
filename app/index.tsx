import { Stack } from 'expo-router'
import { useState } from 'react'
import {
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  FlatList,
  Image,
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

  function onDeleteItem(id: string) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id))
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        alignItems: 'center',
      }}
    >
      <Stack.Screen options={{ title: 'Todo App' }} />

      <View style={{ rowGap: 20, flexDirection: 'column' }}>
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
              paddingVertical: 4,
              color: 'black',
            }}
            value={value}
            onChangeText={setValue}
            placeholder="Do dishes..."
            aria-label="Enter todo item"
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

        <View style={{ flexDirection: 'column' }}>
          <FlatList
            data={items}
            keyExtractor={(item) => item.id}
            renderItem={({ item, index }) => (
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  columnGap: 2,
                  backgroundColor: 'lightblue',
                  borderRadius: 4,
                  paddingVertical: 4,
                  paddingHorizontal: 6,
                  marginTop: index === 0 ? 0 : 8,
                }}
              >
                <Text style={{ color: 'black', fontWeight: 'bold' }}>
                  {item.value}
                </Text>
                <View style={{ alignItems: 'center', columnGap: 4 }}>
                  <TouchableOpacity
                    aria-label="Edit"
                    onPress={() => onDeleteItem(item.id)}
                    style={{
                      backgroundColor: 'red',
                      padding: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Image
                      source={require('../assets/delete.png')}
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>

                  <TouchableOpacity
                    aria-label="Delete"
                    onPress={() => onDeleteItem(item.id)}
                    style={{
                      backgroundColor: 'red',
                      padding: 4,
                      borderRadius: 4,
                    }}
                  >
                    <Image
                      source={require('../assets/delete.png')}
                      resizeMode="contain"
                      style={{ width: 20, height: 20 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home
