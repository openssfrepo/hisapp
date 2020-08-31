import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import RequestService from './RequestService';

const Tab = createMaterialTopTabNavigator();
export default function Activities() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Requests" component={RequestService} />
    </Tab.Navigator>
  );
}