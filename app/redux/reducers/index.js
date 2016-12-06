/**
 * Created by miracle on 2016/8/13.
 */
import {combineReducers} from 'redux';
import test from './test';
import forms from './forms';
import login from './login'


const rootReducers = combineReducers({
    login,
    test,
    forms,
});

export default rootReducers;