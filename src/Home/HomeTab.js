import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Donation from '../Donation/Donation';
import Timeline from '../Timeline/Timeline';
import Setting from '../Setting/Setting';
import Contact from '../Contact/Constact';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Contact" component={Contact} />
      <Tab.Screen name="Donation" component={Donation} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
