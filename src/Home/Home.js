import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import Event from '../Event/Event';
import Dashboard from '../Dashboard/Dashboard';
import Halal from '../Services/Halal';

const Tab = createMaterialTopTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Service" component={Halal} />
    </Tab.Navigator>
  );
}
