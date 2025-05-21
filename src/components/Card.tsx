import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Space from './Space';

interface Props {
  item: Card;
}

const Card = ({item}: Props) => {
  return (
    <View style={styles.item}>
      <View style={styles.headerItem}>
        <Text style={styles.title}>{item.title}</Text>
        <TouchableOpacity style={styles.button}>
          <Text>{item.button}</Text>
        </TouchableOpacity>
      </View>
      <Space height={5} />
      <Text numberOfLines={3}>{item.desc}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
    paddingVertical: 8,
    paddingHorizontal: 12,
  },
  headerItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
  button: {
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 4,
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#BAB5C1',
  },
});

export default Card;
