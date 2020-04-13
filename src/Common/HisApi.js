import React from 'react';
import Const from '../Common/Const';

var _url = 'http://localhost:4001/getAllUser';
var _login = null;

export default class HisApi {
    static setUrl(url) {
        _url = url
        return
    }
    static getUrl() {
        return _url
    }
    static getLoginInfo() {
        return _login
    }
    static async getAllUser() {
        // var method = 'GET'
        // var request = {
        //     "request": "getAllUser"
        // }
        // try{
        //     _login = await this._callHisApi(method,request)
        //     return _login
        // } catch(e) {
        //     throw(e)
        // }
        // return fetch(_url).then((response) => {
        //     console.log(response)
        //     return response
        // })
        // .catch((error)=>{
        //     console.error(error)
        // });

    }
    static async _callHisApi (method,request) {
        var url = HisApi.getUrl() +'/'+ request.request
        var header = {
            method : method,
            headers: {
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            body: JSON.stringify(request)
        }
        var result
        try {
            result = await fetch(_url)
            return result.json()
        } catch(e){
            throw(e)
        }
        // const response = await result.json()
        // console.log(response)
        // if(response.result){
        //     return response
        // } else{
        //     return
        // }
    }

}