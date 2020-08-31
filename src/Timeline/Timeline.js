import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
    Alert,
    Button,
  } from 'react-native';
import Chat from './Chat';
import QandA from './QandA';
import Feed from './Feed';

  const Tab = createMaterialTopTabNavigator();
  export default function Timeline() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Chat" component={Chat} />
        <Tab.Screen name="Ask Imam" component={QandA} />
      </Tab.Navigator>
    );
  }