import React, {Component} from 'react';
import {View, Text} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
export default class Chat extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        <Card>
          <Text>Any content you want to include on the card</Text>
          <Text>More content that you want on the card</Text>
        </Card>
        <Card>
          <Text>Any content you want to include on the card</Text>
          <Text>More content that you want on the card</Text>
        </Card>
      </View>
    );
  }
}
