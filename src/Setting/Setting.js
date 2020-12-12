import React from 'react';
import ReactNativeSettingsPage, {
  SectionRow,
  NavigateRow,
  SwitchRow,
  CheckRow,
  SliderRow,
} from 'react-native-settings-page';
import {Alert} from 'react-native';
import {Button} from 'react-native-elements';
import IconAntDesign from 'react-native-vector-icons/AntDesign';

class Setting extends React.Component {
  // TODO: implement your navigationOptions
  state = {
    check: true,
    switch: true,
    value: 40,
  };
  render() {
    return (
      <ReactNativeSettingsPage>
        <SectionRow text="General Setting">
          <NavigateRow text="My Profile" iconName="user" />
          <SwitchRow
            text="Switch Row"
            iconName="your-icon-name"
            _value={this.state.switch}
            _onValueChange={() => {
              this.setState({switch: !this.state.switch});
            }}
          />
          <CheckRow
            text="Check Row"
            iconName="your-icon-name"
            _color="#000"
            _value={this.state.check}
            _onValueChange={() => {
              this.setState({check: !this.state.check});
            }}
          />
          <SliderRow
            text="Slider Row"
            iconName="your-icon-name"
            _color="#000"
            _min={0}
            _max={100}
            _value={this.state.value}
            _onValueChange={value => {
              this.setState({value});
            }}
          />
        </SectionRow>
        <SectionRow text="System Setting">
          <NavigateRow text="Language" iconName="language" />
          <NavigateRow text="My Profile" iconName="user" />
          <NavigateRow text="My Profile" iconName="user" />
          <NavigateRow text="My Profile" iconName="user" />
        </SectionRow>
        <SectionRow text="Other">
          <NavigateRow text="Language" iconName="language" />
          <NavigateRow text="My Profile" iconName="user" />
          <NavigateRow text="My Profile" iconName="user" />
          <NavigateRow text="My Profile" iconName="user" />
        </SectionRow>
          <Button
            icon={<IconAntDesign name="logout" size={20} color="white" />}
            style={{marginTop: 0}}
            buttonStyle= {{backgroundColor:'indianred'}}
            title="Logout"
            type="solid"
            onPress={() => this._onPressLogoutButton()}
          />
      </ReactNativeSettingsPage>
    );
  }
  _onPressLogoutButton() {
    Alert.alert(
      'Logout',
      'Are you sure ?',
      [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel'
        },
        { text: 'OK', onPress: () => this.props.navigation.replace('Login') }
      ],
      { cancelable: false }
    );
  }
}

export default Setting;
