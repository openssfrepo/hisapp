import * as React from 'react';
import {
    Alert,
    Button,
  } from 'react-native';
  export default function Timeline() {
    return (
      <Button
        title="Timeline Page Alert"
        onPress={() => Alert.alert('Timeline Page Working!')}
      />
    );
  }