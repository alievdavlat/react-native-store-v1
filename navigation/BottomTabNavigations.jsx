import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Home, Profile, Search} from '../screens';
import { Ionicons } from '@expo/vector-icons';
import { Colors } from '../constants/index';


const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarStyle: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
    elevation: 0,
    height: 70,
  },

 
};


function BottomTabNavigations() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      <Tab.Screen 
      name="Home" 
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
         <Ionicons name={focused ? 'home' : 'home-outline'} size={24} color={focused ? Colors.primary : Colors.gray2} />
        ),
      }}
      />

      <Tab.Screen 
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name={focused ? 'person' : 'person-outline' } size={24} color={focused ? Colors.primary : Colors.gray2} />
        ),
      }}
      />

      <Tab.Screen 
      name="Search"
      component={Search}
      options={{
        tabBarIcon: ({ focused }) => (
          <Ionicons name={'search-sharp' } size={24} color={focused ? Colors.primary : Colors.gray2} />
        ),
      }}
      />
     
    </Tab.Navigator>
  );
}

export default BottomTabNavigations;