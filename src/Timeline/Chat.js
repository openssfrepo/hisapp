import React, {Component} from 'react';
import {View, Text, StyleSheet, TextInput, Button, KeyboardAvoidingView} from 'react-native';
import io from 'socket.io-client';
export default class Chat extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chatMessage: '',
      chatMessages: [],
    };
  }
  componentDidMount() {
    this.socket = io('http://127.0.0.1:4001');
    this.socket.on('chat message', msg => {
      this.setState({chatMessages: [...this.state.chatMessages, msg]});
    });
  }
  render() {
    const chatMessages = this.state.chatMessages.map(chatMessage => (
      <Text style={{borderWidth: 2, top: 500}}>{chatMessage}</Text>
    ));
    return (
      // <View style={styles.container}>
      //   {chatMessages}
      //   <TextInput
      //     style={{height: 40, borderWidth: 2, top: 600}}
      //     autoCorrect={false}
      //     value={this.state.chatMessage}
      //     onSubmitEditing={() => this.submitChatMessage()}
      //     onChangeText={chatMessage => {
      //       this.setState({chatMessage});
      //     }}
      //   />
      // </View>
      <View style={styles.container}>
      {chatMessages}
        <KeyboardAvoidingView
          style={{position: 'absolute', left: 0, right: 0, bottom: 0}}
          behavior="position">
          <TextInput
            style={styles.input}
            autoCorrect={false}
            value={this.state.chatMessage}
            onSubmitEditing={() => this.submitChatMessage()}
            onChangeText={chatMessage => {
              this.setState({chatMessage});
            }}
            underlineColorAndroid="transparent"
          />
          <Button onPress={() => this.submitChatMessage()} title="SEND" />
        </KeyboardAvoidingView>
      </View>
    );
  }
  submitChatMessage() {
    this.socket.emit('chat message', this.state.chatMessage);
    this.setState({chatMessage: ''});
  }
}
// const styles = StyleSheet.create({
//   container: {
//     height: 400,
//     flex: 1,
//     backgroundColor: '#F5FCFF',
//   },
// });
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
    bottom: 0,
  },
  input: {
    backgroundColor: 'red',
    width: '100%',
    height: 40,
    color: '#ffffff',
    position: 'absolute', left: 0, right: 0, bottom: 0
  },
});
