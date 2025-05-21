import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import Space from './Space';

interface Props {
  title: string;
  [key: string]: any;
}

const Input = ({title, ...props}: Props) => {
  return (
    <View style={styles.container}>
      <Text>{title}</Text>
      <Space height={5} />
      <TextInput style={styles.inputView} {...props} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  inputView: {
    borderWidth: 1,
    padding: 12,
    borderColor: '#000',
    width: '100%',
    borderRadius: 6,
  },
});

export default Input;
