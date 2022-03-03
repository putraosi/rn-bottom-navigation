import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {BottomNavigator} from '..';
import {ComingSoon} from '../../pages';

const Tab = createBottomTabNavigator();

const NormalBottomNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={'Home'}
      backBehavior={'initialRoute'}
      tabBar={props => <BottomNavigator {...props} />}
      screenOptions={{headerShown: false}}>
      <Tab.Screen name="home" component={ComingSoon} />
      <Tab.Screen name="transactions" component={ComingSoon} />
      <Tab.Screen name="new-booking" component={ComingSoon} />
      <Tab.Screen name="notifications" component={ComingSoon} />
      <Tab.Screen name="profile" component={ComingSoon} />
    </Tab.Navigator>
  );
};

export default NormalBottomNavigator;

const styles = StyleSheet.create({});
