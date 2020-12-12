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

exports.getloginInfo = function() {
  return _login;
};
exports.login = function(user,pass) {
  var url = _url + 'authLogin';
  var body = JSON.stringify({
    username: user,
    password: pass,
  });
  return _callHisApi(url, _POST, body).then(res => {
    return res;
  });
};
exports.getPrayerInfo = function(prayerDate) {
  var url = _url + 'prayerSelectOne';
  var body = JSON.stringify({
    prayerDate: prayerDate,
  });
  return _callHisApi(url, _POST, body).then(res => {
    return res;
  });
};
function _callHisApi(apiUrl, methodName, itemBody) {
  try {
    var options = {
      method: methodName,
      headers: _headerOptions,
      body: itemBody,
    };
    return fetch(apiUrl, options)
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
