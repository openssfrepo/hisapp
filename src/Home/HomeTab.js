import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../Home/Home';
import Timeline from '../Timeline/Timeline';
import Setting from '../Setting/Setting';
import Services from '../Services/Services';
import Activities from '../Activities/Activities';

const Tab = createBottomTabNavigator();

export default function HomeTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home}/>
      <Tab.Screen name="Timeline" component={Timeline} />
      <Tab.Screen name="Service" component={Services} />
      <Tab.Screen name="Activities" component={Activities} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
}
