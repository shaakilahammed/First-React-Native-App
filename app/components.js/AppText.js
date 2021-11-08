import React from 'react';
import { Platform, Text, StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppText({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    color: colors.secondary,
    ...Platform.select({
      ios: {
        fontSize: 30,
        fontFamily: 'Avenir',
      },
      android: {
        fontSize: 20,
        fontFamily: 'Roboto',
      },
    }),
  },
});

export default AppText;
