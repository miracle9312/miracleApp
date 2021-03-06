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
import {fetchDataset} from '../../redux/action/dateset'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

class DataSet extends Component{
    constructor(props){
        super(props)
        this.state={
            editable:false
        }
    }

    componentDidMount(){
        console.log(this.props,'dataset props')
        this.initialSex();
    }

    initialSex=()=>{
        const {dispatch,route} = this.props;
        dispatch(actions.change('forms.dataset.sex',route.personData.sex))
    }

    changeSex=(sex)=>{
        if(this.state.editable){
            const {dispatch} = this.props
            dispatch(actions.change('forms.dataset.sex',sex))
            console.log(this.props.register.sex)
        }else {
            return
        }
    }

    changeEditable=()=>{
        const {dispatch,forms,navigator} = this.props;
        this.setState({
            editable:this.state.editable?false:true
        })
        if(this.state.editable){
            let params = {
                uname:forms.dataset.username.value,
                address:forms.dataset.address.value,
                email:forms.dataset.email.value,
                phone:forms.dataset.phone.value,
                pwd:this.props.route.personData.password

            }
            dispatch(fetchDataset(params,navigator))
        }
    }

    render(){
        const {personData} = this.props.route
        return(
            <View>
                <DetailToolBar
                    color="#ffffff"
                    text="个人资料"
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
                                    editable={this.state.editable}
                                    underlineColorAndroid = '#eee'
                                    defaultValue = {personData.nickName}
                                    model = '.dataset.username'
                                    validators={{
                                        required:val=>val&&val.length>0
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.dataset.username'
                                messages = {{
                                    required:'用户名不能为空'
                                }}
                                component ={props=><ErrorInfo info={props.children} />}
                                show= {{touched: true, focus: false}}
                            />

                            <ListContainer
                                iconname='map-marker'
                            >
                                <Control.TextInput
                                    editable={this.state.editable}
                                    underlineColorAndroid = '#eee'
                                    defaultValue = {personData.address}
                                    model = '.dataset.address'
                                    validators={{
                                        required:val=>val&&val.length>0
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.dataset.address'
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
                                    editable={this.state.editable}
                                    underlineColorAndroid = '#eee'
                                    defaultValue = {personData.email?personData.email:''}
                                    model = '.dataset.email'
                                    validators={{
                                        required:val=>val&&val.length>0,
                                        isEmail:validator.isEmail
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.dataset.email'
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
                                    editable={this.state.editable}
                                    defaultValue = {personData.phone}
                                    underlineColorAndroid = '#eee'
                                    model = '.dataset.phone'
                                    validators={{
                                        required:val=>val&&val.length>0,
                                    }}
                                    validateOn = 'blur'
                                />
                            </ListContainer>
                            <Errors
                                model = '.dataset.phone'
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
                                    style={[styles.sexButton,{backgroundColor:this.props.forms.dataset.sex.value==0?'#3ca1d6':'#fff'}]}                                    >
                                    <Icon name = 'mars' color={this.props.forms.dataset.sex.value==0?'#fff':'#eee'} size={30}/>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={this.changeSex.bind(this,1)}
                                    style={[styles.sexButton,{backgroundColor:this.props.forms.dataset.sex.value==1?'#3ca1d6':'#fff'}]}
                                >
                                    <Icon name = 'venus' color={this.props.forms.dataset.sex.value==1?'#fff':'#eee'} size={30}/>
                                </TouchableOpacity>
                            </View>
                            <OperateButton
                                operate={this.changeEditable}
                                text={this.state.editable?'保存':'修改'} />
                        </Form>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

function mapStateToprops (state){
    const {forms} = state;
    return forms
}

export default connect(mapStateToprops)(DataSet)

const styles = StyleSheet.create({
    sexButton:{
        width:windowH*21/100,
        height:60,
        justifyContent: 'center',
        alignItems:'center'
    },
    sexIcon:{
        width:60,
        justifyContent:'center',
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
