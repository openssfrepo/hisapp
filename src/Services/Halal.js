import React, {Component} from 'react';
import {Alert, Button, View} from 'react-native';
export default class Halal extends Component {
  constructor(){
    super();
  }
  render() {
    return (
      <View>
      <Button
        title="Halal Page Alert"
        onPress={() => Alert.alert('Halal Page Working!')}
      />
      </View>
    );
  }
}