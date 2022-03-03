import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';

const CustomTabBarButtom = ({navigation, children, onClick, onPress}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.container,
        ...styles.shadow,
      }}
      onPress={() => {
        onClick();
      }}>
      <View style={styles.wrapper}>{children}</View>
    </TouchableOpacity>
  );
};

export default CustomTabBarButtom;

const styles = StyleSheet.create({
  container: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  shadow: {
    shadowColor: '#7f5df0',
    shadowOffset: {
      height: 10,
      width: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },

  wrapper: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1D8AF5',
  },
});
