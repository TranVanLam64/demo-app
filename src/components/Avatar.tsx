import React from 'react';
import {Image, ImageSourcePropType, StyleSheet, View} from 'react-native';

interface Props {
  size: number;
  source: ImageSourcePropType | undefined;
}

const Avatar = ({size, source}: Props) => {
  return (
    <View
      style={[
        styles.avatarView,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
        },
      ]}>
      {source ? (
        <Image style={styles.image} source={source} />
      ) : (
        <View style={[styles.emptyView, {borderRadius: size / 2}]}></View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  avatarView: {
    // overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  emptyView: {
    backgroundColor: '#BAB5C1',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#000',
    overflow: 'hidden',
  },
});

export default Avatar;
