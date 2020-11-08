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
import {Button} from 'react-native-elements';
import {Card} from '../Custom/Card';
import SelectInput from 'react-native-select-input-ios';
import {Col, Row, Grid} from 'react-native-easy-grid';
import HisApi from '../Common/HisApi';
import UserInfo from '../testdata/loginData'
export default class Login extends Component {
  _loginInfo = [];
  constructor() {
    super();
    this.state = {
      text: '',
      password: '',
    };
  }
  componentDidMount() {

  }
  render() {
    const options = [
      {value: 0, label: 'General'},
      {value: 1, label: 'Admin'},
      {value: 2, label: 'Service proprietor '},
    ];
    return (
      <ImageBackground
        source={require('../Assests/Images/background.jpg')}
        style={{width: '100%', height: '100%'}}>
        <View style={{margin: 1}}>
          <Card>
            <View style={styles.textInputContainer}>
              <Grid>
                <Col>
                  <View style={{padding: 5}}>
                    <Text>Select Login User Type</Text>
                  </View>
                </Col>
                <Col>
                  <View style={styles.userType}>
                    <SelectInput value={0} options={options} />
                  </View>
                </Col>
              </Grid>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image
                source={require('../Assests/Images/hislogo.png')}
                style={{width: 200, height: 200, resizeMode: 'contain'}}
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
                onPress={() =>
                  Alert.alert('Info', 'This process under Construction')
                }
              />
              <Button
                style={{marginTop: 5}}
                title="LOGIN WITH FACEBOOK"
                type="outline"
                onPress={() =>
                  Alert.alert('Info', 'This process under Construction')
                }
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
    var data = HisApi.login();
    if(data === null){
      data = HisApi.login();
      Alert.alert('Variable "comment" is null.');
      console.log(data);
    }else{
      console.log(data);
    }
    // fetch('http://localhost:4001/authLogin', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json',

    //   },
    //   body: JSON.stringify({
    //     "username": "test",
    //     "password": "test",
    //  })
    // })
    //   .then(response => response.json())
    //   .then(responseJson => {
    //     console.log(responseJson);
    //     //_login = responseJson;
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    this.props.navigation.replace('Home');
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
  userType: {
    borderWidth: 1,
    padding: 7,
    borderColor: 'black',
    borderRadius: 10,
  },
});
