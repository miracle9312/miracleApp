/**
 * Created by miracle on 2016/12/7.
 */

import * as types from '../actiontype/actionTypes'
const initialState={
    status:1
}

export default function regist (state = initialState,action){
    switch(action.type){
        case types.REGISTERING:
            return Object.assign({},state,{status:action.type});
        case types.REGISTER_SUCCESS:
            return Object.assign({},state,{status:action.type});
        case types.REGISTER_FAIL:
            return Object.assign({},state,{status:action.type});
        default:
            return state;
    }
}