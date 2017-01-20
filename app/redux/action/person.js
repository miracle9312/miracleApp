/**
 * Created by miracle on 2016/12/7.
 */
import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import {API_USER} from '../../commons/utils/Urls';
import {isNotEmpty} from '../../commons/utils/CommonUtil';
import DeviceStorage from '../../commons/utils/DeviceStorage';

export function fetchPerson (id) {
    let local_person = JSON.parse(JSON.stringify(DeviceStorage.queryObject('PersonInfo')))[0];
    //缓存中含有用户信息 从缓存中获取
    if(isNotEmpty(local_person)){
        return dispatch=>{
            dispatch(fetchingPerson())
            dispatch(fetchedPerson(local_person))
        }
    }else{
        //缓存中没有用户信息 从服务器中获取
        return dispatch=>{
            dispatch(fetchingPerson());
            return request(API_USER+id+'/','get','').then(
                (response)=>{
                    if(response.code=='00000'){
                        dispatch(fetchedPerson(response.data[0]))
                        //重写本地缓存数据
                        DeviceStorage.deleteTable('PersonInfo');
                        DeviceStorage.createSingleObject('PersonInfo',response.data[0]);
                    }else{
                        throw new Error ('获取用户信息失败');
                    }
                }
            ).catch(
                err=>{
                    if(isNotEmpty(err)){
                        dispatch(fetchPersonFail())
                    }
                }
            )
        }

        /*console.log(local_person,'test');*/
    }
}

/*function fetchPersonLocal (){
    let local_data = JSON.stringify(DeviceStorage.queryObject('PersonInfo'))['0'];
}*/

function fetchingPerson (){
    return {
        type:types.FETCH_PERSON
    }
}

function fetchedPerson (data){
    return {
        type:types.FETCH_PERSON_SUCCESS,
        data:data
    }
}

function fetchPersonFail (){
    return {
        type:types.FETCH_PERSON_FAIL
    }
}