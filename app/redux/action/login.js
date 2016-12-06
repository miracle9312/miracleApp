/**
 * Created by miracle on 2016/12/4.
 */
import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import {API_LOGIN_HOST} from '../../commons/utils/Urls';
import {isNotEmpty} from '../../commons/utils/CommonUtil';
import DeviceStorage from '../../commons/utils/DeviceStorage'

export default class Login {
    //登录
    static login=(params)=>{
        return dispatch=>{
            dispatch(logining())
            return request(API_LOGIN_HOST,'post',params)
                .then(
                    (response)=>{
                        //将登录信息写入state
                        if(response.code=='0000'){
                            dispatch(loginSuccess(response.data));
                            //将登录信息写入本地缓存
                            DeviceStorage.deleteTable('LoginInfo');
                            DeviceStorage.createSingleObject('LoginInfo',response.data);
                            console.log(JSON.stringify(DeviceStorage.queryObject('LoginInfo')));
                        }else{
                            throw new Error('登录失败');
                        }
                    }
                ).catch(
                    dispatch(loginFail())
                )
        }
    }
    //将本地缓存的login信息写入state
    static setUser=()=>{
        return dispatch=>{
            let data = JSON.stringify(DeviceStorage.queryObject('LoginInfo'));
            dispatch(login(data))
        }
    }
    //退出登录
    static loginout=()=>{

    }

}

/*export  function login (params) {
    return dispatch=>{
        return request(API_LOGIN_HOST,'post',params)
            .then(
                (response)=>{
                    console.log(response);
                    dispatch(loginSuccess(response.data));
                    DeviceStorage.deleteTable('LoginInfo');
                    DeviceStorage.createSingleObject('LoginInfo',response.data);
                    console.log(JSON.stringify(DeviceStorage.queryObject('LoginInfo')));
                }
            ).catch(
                err=>{
                    if(isNotEmpty(err)){
                        dispatch(loginFail())
                    }
                }
            )
    }
}*/

function logining (){
    return {
        type:types.LOGINING,
        status:0
    }
}

function loginSuccess (params){
    return {
        type:types.LOGIN_SUCCESS,
        data:params,
        status:1
    }
}

function loginFail (){
    return {
        type:types.LOGIN_FAIL,
        status:-1
    }
}