import React, {Component} from 'react';
import {
  Alert,
  View,
  TextInput,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {Button, Card} from 'react-native-elements';
export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
      password: '',
    };
  }
  render() {
    return (
      <ImageBackground
        source={require('../Images/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{margin: 10}}>
          <Card title="WELCOME">
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Images/hislogo.png')}
                style={{width: 200, height: 200}}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Email or Username"
                value={this.state.text}
                onChangeText={text => this.setState({text})}
              />
            </View>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({password})}
              />
            </View>
            <View style={{padding: 5, alignItems: 'flex-end'}}>
              <Text
                style={{color: '#00b383', textDecorationLine: 'underline'}}
                onPress={() =>
                  Alert.alert('Forgot Password', 'Hyper link work')
                }>
                Forgot password
              </Text>
            </View>
            <View>
              <Button
                style={{marginTop: 2}}
                title="LOGIN"
                type="solid"
                onPress={() => this._onPressLoginButton()}
              />
            </View>
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Text>or</Text>
            </View>
            <View>
              <Button
                style={{marginTop: 5}}
                title="LOGIN WITH GOOGLE"
                type="outline"
                onPress={() => Alert.alert('Info', 'This process under Construction')}
              />
              <Button
                style={{marginTop: 5}}
                title="LOGIN WITH FACEBOOK"
                type="outline"
                onPress={() => Alert.alert('Info', 'This process under Construction')}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  margin: 5,
                  color: '#0066ff',
                  textDecorationLine: 'underline',
                }}
                onPress={() => this.props.navigation.navigate('Register')}>
                Don't have a account? Register here
              </Text>
            </View>
          </Card>
        </View>
      </ImageBackground>
    );
  }
  _onPressLoginButton() {
    this.props.navigation.navigate('Home');
  }
}
const styles = StyleSheet.create({
  textInputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#000',
    paddingBottom: 5,
    paddingTop: 10,
  },
  inputStyle: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
});
