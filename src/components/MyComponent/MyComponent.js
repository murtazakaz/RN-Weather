import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const MyComponent = props => (
  <View style={styles.container}>
    <Text>MyComponent Component</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
