import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {WIDTH_WINDOW} from '../../utils/constants';
import Space from '../Space';

interface Props {
  item: Status;
}

const StatusItem = ({item}: Props) => {
  return (
    <View style={styles.item}>
      <Text>{item.value}</Text>
      <Space height={5} />
      <Text>{item.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    width: (WIDTH_WINDOW - 60) / 2,
    alignItems: 'center',
    borderRadius: 4,
    backgroundColor: '#BAB5C1',
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 12,
  },
});

export default StatusItem;
