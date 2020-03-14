import * as React from 'react';
import {
    Alert,
    Button,
  } from 'react-native';
  export default function Event() {
    return (
      <Button
        title="Event Page Alert"
        onPress={() => Alert.alert('Event Page Working!')}
      />
    );
  }