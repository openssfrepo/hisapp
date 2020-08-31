import React from 'react';
import Const from '../Common/Const';

var _url = 'http://localhost:8080/user/getAll';
var _login = null;

export default class HisApi {
  static setUrl(url) {
    _url = url;
    return;
  }
  static getUrl() {
    return _url;
  }
  static getLoginInfo() {
    return _login;
  }
  static async getAllUser() {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', 'Basic SElTX1VTRVI6SElTX1BBU1M=');
    myHeaders.append('Cookie', 'JSESSIONID=0D778C92C129CE434EBDA41538C92EBB');

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };
    fetch('http://localhost:8080/user/getAll', requestOptions)
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        _login = responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  }
  static async _callHisApi(method, request) {
    var url = HisApi.getUrl() + '/' + request.request;
    var header = {
      method: method,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(request),
    };
    var result;
    try {
      result = await fetch(_url);
      return result.json();
    } catch (e) {
      throw e;
    }
  }
}
