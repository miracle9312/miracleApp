/**
 * Created by miracle on 2016/11/25.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    TextInput,
    View,
    Text
} from 'react-native';
import DetailToolBar from '../general/DetailToolBar';
import {connect} from 'react-redux';
import {Form,Control,Errors} from 'react-redux-form/native';
import {ListContainer,ErrorInfo,OperateButton} from './ErrorList';
import Register from './Register';
import LoginOperator from '../../redux/action/login';
import FindPwd from './FindPwd'
import Person from './Person'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;
class Login extends Component {
    constructor(props){
        super(props);
    }

    toRegister=()=>{
        const {navigator} = this.props
        navigator.push({
            name:'register',
            component:Register
        })
    }

    toFindPwd=()=>{
        const {navigator} = this.props
        navigator.push({
            name:'findpwd',
            component:FindPwd
        })
    }

    componentDidMount(){

    }

    _login=()=>{
        const {dispatch,forms,navigator} =this.props;
        const params={
            uname:forms.login.name.value,
            pwd:forms.login.password.value
        }
        dispatch(LoginOperator.login(params));
        /*navigator.push({
            component:Person,
            name:'person'
        })*/
        /*dispatch(login(params))*/
    }

    render(){
        return(
            <View style = {styles.tableCan}>
                <DetailToolBar
                    color="#ffffff"
                    text="登录"
                    navigator = {this.props.navigator}
                />
                <View style={styles.formContainer}>
                    <Form
                        model = 'forms'
                    >
                        <ListContainer
                            iconname="user"
                        >
                            <Control.TextInput
                                selectionColor ="#fff"
                                underlineColorAndroid="#eee"
                                model=".login.name"
                                validators={{
                                    required:val=>val&&val.length>0,
                                }}
                                validateOn = "blur"
                            />
                        </ListContainer>
                        <Errors
                            model=".login.name"
                            messages={{
                                required:'用户名不能为空',
                            }}
                            component={prop=><ErrorInfo info = {prop.children} />}
                            shows={true}

                        />
                        <ListContainer
                            iconname="key"
                        >
                            <Control.TextInput
                                secureTextEntry={true}
                                selectionColor ="#fff"
                                underlineColorAndroid="#eee"
                                model=".login.password"
                                validators={{
                                    required:val=>val&&val.length>0,
                                }}
                                validateOn = "blur"
                            />
                        </ListContainer>
                        <Errors
                            model=".login.name"
                            messages={{
                                required:'密码不能为空',
                            }}
                            component={prop=><ErrorInfo info = {prop.children} />}
                            shows={true}
                        />
                        <OperateButton
                            operate={this._login}
                            text={'登录'}/>
                    </Form>
                </View>
                <View style={{flexDirection:'row',justifyContent:'space-between',width:windowW*11/10}}>
                    <TouchableOpacity
                        onPress={this.toRegister}
                        style={{margin:windowW/20,width:windowW/3}}>
                        <Text style={{fontSize:16}}>免费注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={this.toFindPwd}
                        style={{margin:windowW/20,width:windowW/3}}>
                        <Text style={{fontSize:16}}>找回密码</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

function mapStateToProps(state){
    const {forms} = state;
    return forms;
}
export default connect(mapStateToProps)(Login)

const styles = StyleSheet.create({
    formContainer:{
        flexDirection:'column',
        alignItems:'center',
        width:windowW,
        marginTop:30
    },
    tableCan:{
        backgroundColor:'#eeeeee',
        width:windowW,
        height:windowH
    }
})