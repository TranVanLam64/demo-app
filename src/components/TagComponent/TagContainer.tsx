import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import TagItem from './TagItem';
import Space from '../Space';

interface Props {
  title: string;
  data: string[];
}

const TagContainer = ({data, title}: Props) => {
  return (
    <View>
      <Text>{title}</Text>
      <Space height={5} />
      <View style={styles.container}>
        {data.map((item, index) => (
          <TagItem item={item} key={index} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 12,
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: 8,
    borderWidth: 1,
    borderColor: '#000',
    borderRadius: 6,
  },
});

export default TagContainer;
