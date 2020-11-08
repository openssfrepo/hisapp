import React from 'react';
import Const from '../Common/Const';

var _url = 'http://localhost:4001/';
var _login = null;
var _response = null;
const _GET = 'GET';
const _POST = 'POST';
const _PUT = 'PUT';
const _DELETE = 'DELETE';
const _headerOptions = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

exports.getResponseData = function() {
  return _response;
};
exports.login = function() {
  var url = _url + 'authLogin';
  var body = JSON.stringify({
    username: 'test',
    password: 'test',
  });
  return JSON.stringify(this._callHisApi(url, _POST, body));
};
exports.getPrayerInfo = function(prayerDate) {
  var url = _url + 'prayerSelectOne';
  var body = JSON.stringify({
    prayerDate: prayerDate,
  });
  return JSON.stringify(this._callHisApi(url, _POST, body));
};
exports._callHisApi = function(apiUrl, methodName, itemBody) {
  try {
    var options = {
      method: methodName,
      headers: _headerOptions,
      body: itemBody,
    };
    fetch(apiUrl, options)
      .then(response => response.json())
      .then(responseJson => {
        return responseJson;
      })
      .catch(error => {
        console.error(error);
      });
  } catch (e) {
    throw e;
  }
}
