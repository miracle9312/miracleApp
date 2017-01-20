/**
 * Created by miracle on 2016/12/7.
 */

import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import {isNotEmpty} from '../../commons/utils/CommonUtil'
import {API_USER} from '../../commons/utils/Urls';

export default function regist (params) {
    return dispatch =>{
        dispatch(registing())
        return request(API_USER,'post',params).then(
            response=>{
                console.log(response.data)
                if(response.code=='00000'){
                    dispatch(registSuccess())
                }else{
                    throw new Error('注册失败');
                }
            }
        ).catch(
            err=>{
                if(isNotEmpty(err)){
                    dispatch(registFail())
                }
            }
        )
    }
}

function registing () {
    return {
        type:types.REGISTERING
    }
}

function registSuccess () {
    return {
        type:types.REGISTER_SUCCESS,
    }
}

function registFail(){
    return {
        type:types.REGISTER_FAIL
    }
}