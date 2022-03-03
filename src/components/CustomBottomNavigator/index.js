import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useState} from 'react';
import {Image, StyleSheet} from 'react-native';
import {CustomTabBarButtom, TabItem} from '..';
import {
  IcHomeActive,
  IcNotificationActive,
  IcPlus,
  IcProfileActive,
  IcTransactionActive,
} from '../../images';
import {ComingSoon} from '../../pages';

const Tab = createBottomTabNavigator();

const CustomBottomNavigator = ({navigation}) => {
  const [routeName] = useState('Home');

  return (
    <Tab.Navigator
      initialRouteName={routeName}
      screenOptions={{
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          ...styles.container,
          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={ComingSoon}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem label={'Home'} isFocused={focused} icon={IcHomeActive} />
          ),
        }}
      />

      <Tab.Screen
        name="Transactions"
        component={ComingSoon}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem
              label={'Transactions'}
              isFocused={focused}
              icon={IcTransactionActive}
            />
          ),
        }}
      />

      <Tab.Screen
        name="New Booking"
        component={ComingSoon}
        options={{
          tabBarIcon: ({focused}) => (
            <Image style={styles.image} resizeMode="contain" source={IcPlus} />
          ),
          tabBarButton: props => (
            <CustomTabBarButtom
              {...props}
              onClick={() => {
                navigation.navigate('ComingSoon');
              }}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Notifications"
        component={ComingSoon}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem
              label={'Notifications'}
              isFocused={focused}
              icon={IcNotificationActive}
            />
          ),
        }}
      />

      <Tab.Screen
        name="Profile"
        component={ComingSoon}
        options={{
          tabBarIcon: ({focused}) => (
            <TabItem
              label={'Profile'}
              isFocused={focused}
              icon={IcProfileActive}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default CustomBottomNavigator;

const styles = StyleSheet.create({
  container: {
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

  image: {
    width: 30,
    height: 30,
    tintColor: '#ffffff',
  },
});
