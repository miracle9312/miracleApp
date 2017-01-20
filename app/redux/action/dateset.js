/**
 * Created by miracle on 2016/12/9.
 */
import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import {API_USER} from '../../commons/utils/Urls';
import DeviceStorage from '../../commons/utils/DeviceStorage';
import {fetchPerson} from './person';
import {isNotEmpty} from '../../commons/utils/CommonUtil';
import Person from '../../commons/person/Person'

export  function fetchDataset (params,navigator) {
    let user = JSON.parse(JSON.stringify(DeviceStorage.queryObject('LoginInfo')))[0];
    let pwd = JSON.parse(JSON.stringify(DeviceStorage.queryObject('Pwd')))[0].pwd;
    let token = user._token;
    params = Object.assign({},params,{_token:token,user:user.uid,pwd:pwd});
    console.log(user,'userinfo')
    return dispatch=>{
        dispatch(fetchingDataset());
        return request(API_USER+user.uid+'/','put',params).then(
            response=>{
                if(response.code=='00000'){
                    dispatch(fetchDatasetSuccess());
                    //将修改后的用户信息写入本地缓存
                    DeviceStorage.createSingleObject('PersonInfo',response.data[0]);
                    if(isNotEmpty(user)){
                        //改变state中的用户信息
                        dispatch(fetchPerson(user.uid));
                    }
                    //跳转至用户信息主页
                    navigator.push({
                        component:Person,
                        name:'person'
                    })
                }
            }
        ).catch(
            err=>{
                if(isNotEmpty(err)){
                    dispatch(fetchDatasetfail());
                }
            }
        )
    }
}

function fetchingDataset(){
    return {
        type:types.FETCH_DATASET
    }
}

function fetchDatasetfail(){
    return {
        type:types.FETCH_DATASET_FAIL
    }
}

function fetchDatasetSuccess(){
    return {
        type:types.FETCH_DATASET_SUCCESS
    }
}