import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Card} from '../Custom/Card';
import io from 'socket.io-client';
import { GiftedChat, InputToolbar } from 'react-native-gifted-chat';
export default class QandA extends Component {
  constructor() {
    super();
    this.state = {
      chatMessage: '',
      giftedMessages: [],
      chatMessages: [],
    };
  }
  componentDidMount() {
    this.socket = io('http://127.0.0.1:4001');
    this.socket.on('chat message', msg => {
      this.setState({giftedMessages: [...this.state.giftedMessages,{
        _id:1,
        text:msg,
        createdAt:new  Date(),
        user:{
          _id: 1,
          name: 'Aaron',
          avatar: 'https://placeimg.com/150/150/any',
        }
        }]});
    });
  }
  render() {
    return(
      <GiftedChat
      messages= {this.state.giftedMessages}
      alignTop
      alwaysShowSend
      scrollToBottom
      showUserAvatar
      renderAvatarOnTop
      renderUsernameOnMessage
      onInputTextChanged={chatMessage => {
              this.setState({chatMessage});
            }}
      onSend={()=>this.submitChatMessage()}
      bottomOffset={26}
      onPressAvatar={console.log}
      isCustomViewBottom
      ></GiftedChat>
    );
  }
  submitChatMessage() {
    this.setState({giftedMessages: [...this.state.giftedMessages, {
      _id:2,
      text:this.state.chatMessage,
      createdAt:new  Date(),
      }]});
    this.socket.emit('chat message', this.state.chatMessage);
    //this.setState({chatMessage: ''});
  }
}
