import * as React from 'react';
import {
    Alert,
    Button,
  } from 'react-native';
  export default function Donation() {
    return (
      <Button
        title="Donation Page Alert"
        onPress={() => Alert.alert('Donation Page Working!')}
      />
    );
  }