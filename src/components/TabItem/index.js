import React from 'react';
import {Image, StyleSheet, View, Text} from 'react-native';

const TabItem = ({icon, label, isFocused}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.images(isFocused)}
        resizeMode="contain"
        source={icon}
      />
      <Text style={styles.label(isFocused)}>{label}</Text>
    </View>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    top: 10,
  },

  images: isFocused => ({
    width: 24,
    height: 24,
    tintColor: isFocused ? '#1D8AF5' : '#c4c4c4',
  }),

  label: isFocused => ({
    color: isFocused ? '#1D8AF5' : '#c4c4c4',
    fontSize: 12,
  }),
});
