import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';
import Screen from '../components/Screen';
import colors from '../config/colors';
const messages = [
  {
    id: 1,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 2,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 3,
    title: 'T3',
    description: 'D4',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 4,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 5,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 12,
    title: 'T3',
    description: 'D4',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 6,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 7,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 8,
    title: 'T3',
    description: 'D4',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 9,
    title: 'T1',
    description: 'D1',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 10,
    title: 'T2',
    description: 'D2',
    image: require('../assets/mosh.jpg'),
  },
  {
    id: 11,
    title: 'T3',
    description: 'D4',
    image: require('../assets/mosh.jpg'),
  },
];
function MessagesScreen(props) {
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log('Message Selected - ', item)}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

export default MessagesScreen;
