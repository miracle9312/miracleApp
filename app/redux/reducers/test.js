/**
 * Created by miracle on 2016/8/13.
 */
import * as types from '../actiontype/actionTypes'

export default function test (state={word:'hello world'},action) {
    switch(action.type){
        case types.TEST:
            return Object.assign({},state,{word:action.name})
        default:
            return state
    }
}
