import React, {useState, useCallback, useEffect} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import {ActivityIndicator, FlatList, Text, View} from 'react-native';
import io from 'socket.io-client';

export default (QandA = () => {
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState();

  useEffect(() => {
    this.socket = io('http://127.0.0.1:4001');
    this.socket.on('chat message', msg => {
      var obj = JSON.parse(msg);
      setMessages(previousMessages =>
        GiftedChat.append(previousMessages,[
          {
            _id: obj[0]._id,
            text: obj[0].text,
            createdAt: obj[0].createdAt,
            user: {
              _id: obj[0].user._id,
              name: obj[0].user.name,
              avatar: obj[0].user.avatar,
            },
          },
        ]));
    });
  }, []);
  const onPress = (messages) => {
    this.socket.emit('chat message', JSON.stringify(messages));
  };
  return (
    <GiftedChat
      messages={messages}
      onInputTextChanged={text => setText(text)}
      onSend={(messages) => onPress(messages)}
      user={{
        _id: 2,
        name: 'QandA Screen',
        createdAt: new Date(),
        avatar: 'https://placeimg.com/140/140/people',
      }}
      showUserAvatar
      renderUsernameOnMessage
    />
  );
});
