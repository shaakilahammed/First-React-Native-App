import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import { Swipeable } from 'react-native-gesture-handler';

import colors from '../config/colors';
import AppText from './AppText';

function ListItem({ image, title, subTitle, onPress, renderRightAction }) {
  return (
    <Swipeable
      renderLeftActions={() => (
        <View style={{ backgroundColor: 'red', width: 50 }}></View>
      )}
    >
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  title: {
    fontWeight: 'bold',
  },
  subTitle: {
    color: colors.medium,
    fontSize: 15,
    marginVertical: 5,
  },
});

export default ListItem;
