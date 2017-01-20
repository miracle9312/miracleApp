/**
 * Created by miracle on 2016/12/26.
 */
import * as types from '../actiontype/actionTypes'

const initialState = {
    type:null,
    data:null,
};
export default function mood (state = initialState, action) {
    switch (action.type){
        case types.FETCH_MOOD:
            return Object.assign({},state,{type:action.type});
        case types.FETCH_MOOD_SUCCESS:
            return Object.assign({},state,{type:action.type, data:action.data});
        case types.FETCH_MOOD_FAIL:
            return Object.assign({},state,{type:action.type});
        case types.COMMENT_AFTER_LOGIN:
            return state;
        case types.ADD_COMMENT_SUCCESS:
            return insertComment(state,action);
        default:
            return state;
    }
}

function insertComment (state,action){
    let newState = state;
    let commentData = action.data;
    let moodid = commentData.moodid;
    if(Object.keys(newState.data).length>0){
        for(let i=0;i<Object.keys(newState.data).length;i++){
            if(newState.data[i].mood.id==moodid){
                newState.data[i].comments.push(commentData);
            }
        }
    }
    /*newState.type=action.type;*/
    return newState;
}