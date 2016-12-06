/**
 * Created by miracle on 2016/11/27.
 */
import {combineForms} from "react-redux-form"
const initialStateLogin = {
    name : '1119test',
    password : 123456,
}

const initialStateRegister = {
    username:'',
    password:'',
    sex:0,
    address:'',
    email:'',
    phone:'',
    birthday:'',
};

const initialStateDataSet = {
    username:'miracle',
    sex:0,
    email:'123@qq.com',
    address:'湖北 武汉',
    phone:'18202787834',
    birthday:'1993 12 18',
}

export default combineForms({
    login:initialStateLogin,
    register:initialStateRegister,
    dataset:initialStateDataSet,
},'forms')