/**
 * Created by miracle on 2016/12/8.
 */
import * as types from '../actiontype/actionTypes';

const initialState = {
    status:1,
    data:null
};

export default function person (state=initialState,action){
    switch(action.type){
        case types.FETCH_PERSON:
            return Object.assign({},state,{status:0});
        case types.FETCH_PERSON_SUCCESS:
            return Object.assign({},state,{status:1,data:action.data});
        case types.FETCH_PERSON_FAIL:
            return Object.assign({},state,{status:-1})
        default:
            return state;
    }
}