import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';
export default class Event extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View>
      <Button
        title="Event Page Alert"
        onPress={() => Alert.alert('Event Page Working!')}
      />
      </View>
    );
  }
}