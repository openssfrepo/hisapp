import * as React from 'react';
import {
    Alert,
    Button,
  } from 'react-native';
  export default function Contact() {
    return (
      <Button
        title="Contact Page Alert"
        onPress={() => Alert.alert('Contact Page Working!')}
      />
    );
  }