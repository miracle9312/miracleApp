/**
 * Created by miracle on 2016/8/13.
 */
import {combineReducers} from 'redux';
import test from './test';
import forms from './forms';
import login from './login';
import regist from './regist';
import person from './person';
import mood from './mood';


const rootReducers = combineReducers({
    person,
    regist,
    login,
    test,
    mood,
    forms
});

export default rootReducers;