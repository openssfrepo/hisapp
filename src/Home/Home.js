import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Dashboard from '../Dashboard/Dashboard';
import Event from '../Event/Event';
import Donation from '../Donation/Donation';

const Tab = createBottomTabNavigator();

export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Event" component={Event} />
      <Tab.Screen name="Donation" component={Donation} />
    </Tab.Navigator>
  );
}
