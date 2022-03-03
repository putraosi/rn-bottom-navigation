import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import {CustomBottomNavigator, NormalBottomNavigator} from '../components';
import {ComingSoon, MainApp} from '../pages';

const Stack = createNativeStackNavigator();

const Router = () => {
  const [initialRoute] = useState('MainApp');

  return (
    <Stack.Navigator initialRouteName={initialRoute}>
      <Stack.Screen
        name="ComingSoon"
        component={ComingSoon}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="CustomBottomNavigator"
        component={CustomBottomNavigator}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="NormalBottomNavigator"
        component={NormalBottomNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({
  constinerTab: {
    position: 'absolute',
    bottom: 25,
    left: 20,
    right: 20,
    elevation: 0,
    backgroundColor: '#ffffff',
    borderRadius: 15,
    height: 90,
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

  containerCustom: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  wrapperCustom: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#1D8AF5',
  },

  image: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
});
