import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import BookingScreen from '../screens/home/BookingScreen';
import SavedScreen from '../screens/home/SavedScreen';
import ProfileScreen from '../screens/home/ProfileScreen';
import {IMAGES} from '../components/constant/Images';
import {COLORS} from '../components/constant/Colors';
const BottomTab = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              resizeMode="contain"
              source={IMAGES.HOME}
              style={{height: 20, width: 20, resizeMode: 'contain'}}
              tintColor={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Booking"
        component={BookingScreen}
        options={{
          tabBarLabel: 'Booking',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={IMAGES.NOTIFICATION}
              style={{height: 20, width: 20}}
              tintColor={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{
          tabBarLabel: 'Saved',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={IMAGES.HEART}
              style={{height: 20, width: 20}}
              tintColor={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          headerShown: false,
          tabBarIcon: ({focused, color}) => (
            <Image
              source={IMAGES.USER}
              style={{height: 20, width: 20}}
              tintColor={focused ? COLORS.DARK_BLUE : COLORS.BLACK}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
