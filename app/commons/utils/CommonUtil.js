/**
 * Created by miracle on 2016/9/9.
 */

import {fetchPerson} from '../../redux/action/person';
import fetchMood from '../../redux/action/mood'
import DeviceStorage from '../utils/DeviceStorage';

/*
* judge the obj is empty or not
* @param bool flag*/
export function isNotEmpty(obj){
    let flag = false
    if(obj!==null&&obj!==undefined&&obj!==''){
        if(obj.constructor==Array){
            if(obj.length!==0){
                flag = true;
            }else{
                flag =false;
            }
        }else {
            flag = true;
        }
    }
    return flag;
}

/*获取全部数据*/
export function fetchAll(){
    try{
        let loginInfo = JSON.parse(JSON.stringify(DeviceStorage.queryObject('LoginInfo')))[0];
        if(!loginInfo){
            throw new Error('NO LOGININFO');
            return
        }
        let id = loginInfo.uid;
        return dispatch=>{
            dispatch(fetchPerson(id));
        }
    }catch(e){
        console.log(e)
    }
}
