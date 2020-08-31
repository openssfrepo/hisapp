import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
    Alert,
    Button,
  } from 'react-native';
import Halal from './Halal';
import School from './School';

  const Tab = createMaterialTopTabNavigator();
  export default function Services() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Halal" component={Halal} />
        <Tab.Screen name="School" component={School} />
      </Tab.Navigator>
    );
  }