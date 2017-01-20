/**
 * Created by miracle on 2016/11/30.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Picker,
    Dimensions,
    ScrollView,
    View,
    Text
} from 'react-native';
import DetailToolBar from '../general/DetailToolBar';
import {ListContainer,ErrorInfo,OperateButton} from './ErrorList';
import {Control,Errors,Form,actions} from 'react-redux-form/native';
import {connect} from 'react-redux';
import validator from 'validator';
import Icon from 'react-native-vector-icons/FontAwesome';
import fetchRegist from '../../redux/action/regist';
import Login from './Login'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

class Register extends Component{
    constructor(props){
        super(props)
    }

    changeSex=(sex)=>{
        const {dispatch} = this.props
        dispatch(actions.change('forms.register.sex',sex))
        /*console.log(this.props.register.sex)*/
    }

    componentDidMount(){
        const{forms} = this.props
        console.log(this.props.forms.forms.register.sex.value)
    }

    _regist=()=>{
        const {dispatch,forms,regist,navigator} = this.props;
        console.log(forms.register)
        let params = {
            uname:forms.forms.register.username.value,
            pwd:forms.forms.register.password.value,
            phone:forms.forms.register.phone.value,
            email:forms.forms.register.email.value,
            sex:forms.forms.register.sex.value,
            city:forms.forms.register.address.value
        }
        dispatch(fetchRegist(params));
        if(regist.status==1){
            navigator.push({
                component:Login,
                name:'login'
            })
        }

    }


    render(){
        let sexValue = this.props.forms.forms.register.sex.value;
        return(
            <View>
                <DetailToolBar
                    color="#ffffff"
                    text="注册"
                    navigator = {this.props.navigator}
                />
                <ScrollView style = {styles.scrollContainer}>
                    <View style={styles.formContainer}>
                        <Form
                            model = 'forms'
                        >
                            <ListContainer
                                iconname='user'
                            >
                                <Control.TextInput
                                    placeholder  = '用户名'
                                    underlineColorAndroid = '#eee'
                                    model = '.register.username'
                                    validators={{
                                        required:val=>val&&val.length>0
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.register.username'
                                messages = {{
                                    required:'用户名不能为空'
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                            <ListContainer
                                iconname='key'
                            >
                                <Control.TextInput
                                    placeholder  = '密码'
                                    underlineColorAndroid = '#eee'
                                    model = '.register.password'
                                    validators={{
                                        required:val=>val&&val.length>0
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.register.password'
                                messages = {{
                                    required:'密码不能为空'
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                            <ListContainer
                                iconname='map-marker'
                            >
                                <Control.TextInput
                                    placeholder  = '地址'
                                    underlineColorAndroid = '#eee'
                                    model = '.register.address'
                                    validators={{
                                        required:val=>val&&val.length>0
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.register.address'
                                messages = {{
                                    required:'地址不能为空'
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                            <ListContainer
                                iconname='envelope'
                            >
                                <Control.TextInput
                                    placeholder  = '邮箱'
                                    underlineColorAndroid = '#eee'
                                    model = '.register.email'
                                    validators={{
                                        required:val=>val&&val.length>0,
                                        isEmail:validator.isEmail
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.register.email'
                                messages = {{
                                    required:'用户名不能为空',
                                    isEmail:'请输入有效邮箱'
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                            <ListContainer
                                iconname='phone'
                            >
                                <Control.TextInput
                                    placeholder  = '手机号'
                                    underlineColorAndroid = '#eee'
                                    model = '.register.phone'
                                    validators={{
                                        required:val=>val&&val.length>0,
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.register.phone'
                                messages = {{
                                    required:'手机号不能为空',
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                                <View style={{flexDirection:'row',marginTop:20}}>
                                    <View style={styles.sexIcon}>
                                        <Icon name = 'venus-mars' size={30} color='#3ca1d6'/>
                                    </View>
                                    <TouchableOpacity
                                        onPress={this.changeSex.bind(this,0)}
                                        style={[styles.sexButton,{backgroundColor:sexValue==0?'#3ca1d6':'#fff'}]}                                    >
                                        <Icon name = 'mars' color={sexValue==0?'#fff':'#eee'} size={30}/>
                                    </TouchableOpacity>

                                    <TouchableOpacity
                                        onPress={this.changeSex.bind(this,1)}
                                        style={[styles.sexButton,{backgroundColor:sexValue==1?'#3ca1d6':'#fff'}]}
                                    >
                                        <Icon name = 'venus' color={sexValue==1?'#fff':'#eee'} size={30}/>
                                    </TouchableOpacity>
                                </View>
                            <OperateButton
                                operate = {this._regist}
                                text="注册" />
                        </Form>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

function mapStateToprops (state){
    const {forms,regist} = state
    return {
        forms,
        regist
    }
}

export default connect(mapStateToprops)(Register)

const styles = StyleSheet.create({
    sexIcon:{
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    sexButton:{
        width:windowH*21/100,
        height:60,
        justifyContent: 'center',
        alignItems:'center'
    },
    formContainer:{
        width:windowW,
        alignItems:'center'
    },
    scrollContainer:{
        height:windowH*52/60,
        width:windowW
    }
})
