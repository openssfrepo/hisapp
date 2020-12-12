import * as React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {
    Alert,
    Button,
  } from 'react-native';
import QandA from './QandA';
import Feed from './Feed';
import ChatScreen from './ChatScreen';

  const Tab = createMaterialTopTabNavigator();
  export default function Timeline() {
    return (
      <Tab.Navigator>
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Ask Imam" component={QandA} />
      </Tab.Navigator>
    );
  }