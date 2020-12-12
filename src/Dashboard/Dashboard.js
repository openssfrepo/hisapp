import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  AsyncStorage
} from 'react-native';
//import { Card, Button, Icon } from 'react-native-elements'
import {Card} from '../Custom/Card';
import Prayertime from '../Prayertime/Prayertime';
export default class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      userInfo: []
    };
  }
  componentDidMount() {
    AsyncStorage.getItem('userInfo').then(data=> {
      this.setState({
        userInfo: data
      })
    });
  }
  render() {
    return (
      <ImageBackground
        source={require('../Assests/Images/hisback.jpg')}
        style={{width: '100%', height: '100%'}}>
        <SafeAreaView>
          <ScrollView>
            <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Prayertime')}>
              <Card>
                <Text>Any content you want to include on the card</Text>
                <Text>{this.state.userInfo}</Text>
              </Card>
            </TouchableOpacity>
            </View>
            <View>
            <TouchableOpacity
                style={styles.button}
                onPress={() => this.props.navigation.navigate('Prayertime')}>
              <Card>
                <Text>Any content you want to include on the card</Text>
                <Text>{this.state.userInfo}</Text>
              </Card>
            </TouchableOpacity>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    color: 'white',
    padding: 5,
    fontSize: 20,
    backgroundColor: 'green',
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginTop: 5,
    marginBottom: 5,
  },
});