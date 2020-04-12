import * as React from 'react';
import {
    Alert,
    Button,
  } from 'react-native';
  export default function Academy() {
    return (
      <Button
        title="Dashboard Page Alert"
        onPress={() => Alert.alert('Dashboard Page Working!')}
      />
    );
  }