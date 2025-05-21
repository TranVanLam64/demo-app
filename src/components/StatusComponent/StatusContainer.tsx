import React from 'react';
import {StyleSheet, View} from 'react-native';
import StatusItem from './StatusItem';

interface Props {
  data: Status[];
}

const StatusContainer = ({data}: Props) => {
  return (
    <View style={styles.container}>
      {data.map((item, index) => (
        <StatusItem item={item} key={index} />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
});

export default StatusContainer;
