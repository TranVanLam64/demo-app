import React from 'react';
import {StyleSheet, View} from 'react-native';

const Space = ({height}: {height: number}) => {
  return <View style={[styles.container, {height}]} />;
};

export default Space;

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});
