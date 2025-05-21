import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {
  item: string;
}

const TagItem = ({item}: Props) => {
  return (
    <View style={styles.item}>
      <Text>{item}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#000',
    paddingVertical: 6,
    paddingHorizontal: 8,
    backgroundColor: '#BAB5C1',
  },
});

export default TagItem;
