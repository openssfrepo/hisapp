import React, {Component} from 'react';
import {Alert, Button} from 'react-native';
export default class Setting extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <Button
        style={{marginTop: 2}}
        title="Logout"
        type="solid"
        onPress={() => this._onPressLogoutButton()}
      />
    );
  }
  _onPressLogoutButton() {
    this.props.navigation.replace('Login');
  }
}
