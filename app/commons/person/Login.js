/**
 * Created by miracle on 2016/11/25.
 */
import React,{Component} from 'react';
import {
    ActivityIndicator ,
    Modal,
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
import FindPwd from './FindPwd';
import Person from './Person';
import DeviceStorage from '../utils/DeviceStorage'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;
class Login extends Component {
    constructor(props){
        super(props);
        this.state={
            modalVisible:false,
        }
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
        const {dispatch,forms,login,navigator} =this.props;
        console.log(this.props)
        console.log(forms)
        const params={
            uname:forms.forms.login.name.value,
            pwd:forms.forms.login.password.value
        }
        dispatch(LoginOperator.login(params,navigator));
        /*if(login.status==1){
            this.toPerson();
        }else{
            return;
        }*/
    }

    render(){
        return(
            <View>
                <Modal
                    animationType='fade'
                    visible={this.props.login.status==0}
                    transparent={true}
                    onRequestClose={()=>{alert('hello')}}
                >
                    <View
                        style={styles.loginBack}
                    >
                        <View
                            style={styles.loginBar}
                        >
                            <ActivityIndicator
                                color="#fff"
                                size="small"
                            />
                            <Text style={{color:'#fff'}}>登录中</Text>
                        </View>
                    </View>
                </Modal>
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
                            show= {{touched: true, focus: false}}

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
                            show= {{touched: true, focus: false}}
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
            </View>
        )
    }
}

function mapStateToProps(state){
    const {forms,login} = state;
    return {
        forms,
        login
    };
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
    },
    loginBar:{
        borderRadius:2,
        width:windowW*19/20,
        height:windowH/20,
        backgroundColor:'#212121',
        alignItems:'center',
        flexDirection:'row',
        justifyContent:'center'
    },
    loginBack:{
        backgroundColor:'#2121',
        width:windowW,
        height:windowH,
        alignItems:'center'
    }
})