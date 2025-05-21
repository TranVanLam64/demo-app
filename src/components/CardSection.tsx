import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Space from './Space';
import Card from './Card';

interface Props {
  title: string;
  data: Card[];
}

const CardSection = ({title, data}: Props) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Space height={12} />
      <View style={styles.list}>
        {data.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  list: {
    gap: 8,
  },
});

export default CardSection;
