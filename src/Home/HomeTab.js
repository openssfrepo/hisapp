import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Timeline from '../Timeline/Timeline';
import Setting from '../Setting/Setting';
import Services from '../Services/Services';
import Activities from '../Activities/Activities';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen 
      name="Home" 
      component={Home} 
      options={{
        tabBarLabel: 'Home',
        tabBarIcon: ({ color, size }) => (
        <IconFontAwesome name="home" color={color} size={size} />
        ),}}/>
      <Tab.Screen 
      name="Timeline" 
      component={Timeline}
      options={{
        tabBarLabel: 'Timeline',
        tabBarIcon: ({ color, size }) => (
        <IconFontAwesome name="globe" color={color} size={size} />
        ),}}
      />
      <Tab.Screen 
      name="Service" 
      component={Services} 
      options={{
        tabBarLabel: 'Service',
        tabBarIcon: ({ color, size }) => (
        <IconFontAwesome name="coffee" color={color} size={size} />
        ),}}
      />
      <Tab.Screen 
      name="Activities" 
      component={Activities} 
      options={{
        tabBarLabel: 'Activities',
        tabBarIcon: ({ color, size }) => (
        <IconFontAwesome name="group" color={color} size={size} />
        ),}}
      />
      <Tab.Screen 
      name="Setting" 
      component={Setting} 
      options={{
        tabBarLabel: 'Setting',
        tabBarIcon: ({ color, size }) => (
        <IconFontAwesome name="gear" color={color} size={size} />
        ),}}/>
    </Tab.Navigator>
  );
}
