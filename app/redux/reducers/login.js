/**
 * Created by miracle on 2016/12/4.
 */
import * as types from '../actiontype/actionTypes'

/*@param int status:(-1：登录失败0：正在登录，1：登录成功)
* @param object data:用户信息*/
const initialState = {
    status:1,
    data:null
}

export default function login (state=initialState,action){
    switch(action.type){
        case types.LOGINING:
            return Object.assign({},state,{status:action.status})
        case types.LOGIN_SUCCESS:
            return Object.assign({},state,{data:action.data,status:action.status});
        case types.LOGIN_FAIL:
            return Object.assign({},state,{status:action.status});
        default:return state;
    }
}