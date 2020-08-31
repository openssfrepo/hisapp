import React, {Component} from 'react';
import {View, Text} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
export default class Notices extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <View>
        {/* <Card title="HELLO WORLD" image={require('../Assests/Images/background.jpg')}>
          <Text style={{marginBottom: 10}}>
            The idea with React Native Elements is more about component
            structure than actual design.
          </Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card> */}
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
