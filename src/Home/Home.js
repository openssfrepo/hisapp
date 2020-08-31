import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import * as React from 'react';
import Dashboard from '../Dashboard/Dashboard';
import Events from '../Activities/Events';
import Notices from '../Activities/Notices';

const Tab = createMaterialTopTabNavigator();
export default function Home() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={Dashboard} />
      <Tab.Screen name="Events" component={Events} />
      <Tab.Screen name="Notices" component={Notices} />
    </Tab.Navigator>
  );
}
