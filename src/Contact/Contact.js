import React, { Component } from 'react';
import {
  View, FlatList, Text, Alert
} from 'react-native';
import {
  Avatar,
} from 'react-native-elements';
import HisApi from '../Common/HisApi';
import Card from '../Custom/Card';


export default class Contact extends Component {
  constructor() {
    super();
    this._loginUser = null;
    this._ContactList = []
    this.state = {
      contactList: [],
      isContactLoading: false
    }
  }
  async componentDidMount() {
    var list = []
    try{
      
     list = this.getAllUser()
    } catch(e){
      throw (e)
    }
    //   Alert.alert('data test', JSON.stringify(list))
    //   // this.setState({
    //   //   contactList: JSON.stringify(list),
    //   //   isContactLoading: true
    //   // })
  }
  getAllUser(){
    return fetch('http://127.0.0.1:4001/getAllUser')
      .then((response) => response.json())
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error)
      });
  }
  render() {
    return (
      // <FlatList
      //   data={this.state.contactList}
      //   renderItem={this._renderContactList.bind(this)}
      //   keyExtractor={(item, index) => index}
      // />
      <Text>data</Text>
    );
  }
  _renderContactList({ item, index }) {

    return (
      <View>
        <Card>
          <Avatar
            size="small"
            rounded
            title="A"
            onPress={() => console.log("works")}
            activeOpacity={0.7}
          />
          <Text>{item.Name}</Text>
        </Card>
      </View>
    )
  }

}