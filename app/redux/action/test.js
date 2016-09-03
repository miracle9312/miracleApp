/**
 * Created by miracle on 2016/8/13.
 */
import * as types from '../actiontype/actionTypes'

export default function test(word){
    return {
        type:types.TEST,
        name:word
    }
}