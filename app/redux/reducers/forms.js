/**
 * Created by miracle on 2016/11/27.
 */
import {combineForms} from "react-redux-form"

/*export class formsState {
    private static initialStateLogin = {
        name : 'memeda',
        password :'',
    }

    private static initialStateRegister = {
        username:'',
        password:'',
        sex:0,
        address:1,
        email:'',
        phone:'',
        birthday:new Date(),
    };

    private static initialStateDataSet = {
        username:'miracle',
        sex:0,
        email:'123@qq.com',
        address:1,
        phone:'18202787834',
        birthday:new Date(),
    }

    public static getLoginState =()=>{
        return this.initialStateLogin;
    }

    public static setLoginState =(state)=>{
        this.initialStateLogin = state;
    }

    public static getRegisterState =()=>{
        return this.initialStateRegister
    }

    public static setRegisterState =(state)=>{
        this.initialStateRegister = state;
    }

    public static getDataSetState =()=>{
        return this.initialStateDataSet
    }

    public static setDataSetState =(state)=>{
        this.initialStateDataSet = state;
    }
}*/
const initialStateLogin = {
    name : '',
    password :'',
}

const initialStateRegister = {
    username:'',
    password:'',
    sex:0,
    address:1,
    email:'',
    phone:'',
    birthday:new Date(),
};

const initialStateDataSet = {
    username:'',
    sex:null,
    email:'',
    address:'',
    phone:'',
    birthday:null,
}

export default combineForms({
    login:initialStateLogin,
    register:initialStateRegister,
    dataset:initialStateDataSet,
},'forms')