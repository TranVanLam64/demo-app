// Core
import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Space from './Space';

interface Props {
  title: string;
  [key: string]: any;
}

const TextArea = ({title, ...props}: Props) => {
  return (
    <View style={[styles.container]}>
      <Text>{title}</Text>
      <Space height={5} />
      <TextInput style={styles.input} multiline {...props} />
    </View>
  );
};
export default TextArea;

const styles = StyleSheet.create({
  container: {},

  input: {
    width: '100%',
    borderWidth: 1,
    borderRadius: 6,
    padding: 12,
    minHeight: 150,
    textAlignVertical: 'top',
  },
});
