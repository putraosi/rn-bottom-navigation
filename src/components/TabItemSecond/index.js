import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {
  IcHomeActive,
  IcHomeInactive,
  IcNotificationActive,
  IcNotificationInactive,
  IcPlus,
  IcProfileActive,
  IcProfileInactive,
  IcTransactionActive,
  IcTransactionInactive,
} from '../../images';

const TabItem = ({type, active, onPress, onLongPress}) => {
  let title = 'Home';
  let color = active ? '#1D8AF5' : '#c4c4c4';
  let Icon = IcHomeActive

  if (type == 'new-booking') {
    title = 'New Booking';
    Icon = IcPlus;
  } else if (type == 'transactions') {
    title = 'Transactions';
    Icon = IcTransactionActive
  } else if (type == 'notifications') {
    title = 'Notifications';
    Icon = IcNotificationActive
  } else if (type == 'profile') {
    title = 'Profile';
    Icon = IcProfileActive
  }

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <Image style={styles.images(color)} source={Icon} />
      <Text style={styles.label(color)}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },

  images: tintColor => ({
    width: 24,
    height: 24,
    tintColor,
  }),

  label: color => ({
    fontSize: 10,
    color,
    marginTop: 7,
  }),
});
