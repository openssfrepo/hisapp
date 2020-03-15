import React, {Component} from 'react';
import {
  Text,
  TextInput,
  ImageBackground,
  Image,
  StyleSheet,
  View,
} from 'react-native';
import {Button, Card} from 'react-native-elements';
export default class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      phone: '',
      password: '',
      confirm_password:'',
    };
  }

  render() {
    return (
      <ImageBackground
        source={require('../Images/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{margin: 10}}>
          <Card title="REGISTER">
            <Text>Email Address:</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                placeholder="Email or Username"
                value={this.state.email}
                onChangeText={email => this.setState({email})}
              />
            </View>
            <Text>Phone Number:</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                keyboardType = 'numeric'
                placeholder="Phone Number"
                value={this.state.phone}
                onChangeText={phone => this.setState({phone})}
              />
            </View>
            <Text>Password:</Text>
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
            <Text>Confirm Password:</Text>
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.inputStyle}
                autoCorrect={false}
                secureTextEntry
                placeholder="Confirm Password"
                value={this.state.confirm_password}
                onChangeText={confirm_password => this.setState({confirm_password})}
              />
            </View>
            
            <View>
              <Button
                style={{marginTop: 2}}
                title="LOGIN"
                type="solid"
                onPress={() => this._onPressLoginButton()}
              />
            </View>
            <View style={{alignItems: 'flex-end'}}>
              <Text
                style={{
                  margin: 5,
                  color: '#0066ff',
                  textDecorationLine: 'underline',
                }}
                onPress={() => this.props.navigation.navigate('Login')}>
                Already have a account? Login here
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
  textStyle: {
    flex: 1,
    height: 40,
    marginLeft: 5,
  },
});
