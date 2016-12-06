/**
 * Created by miracle on 2016/9/16.
 */
import React,{Component} from 'react';
import {
    ScrollView,
    StyleSheet,
    ListView,
    Dimensions,
    Image,
    TouchableOpacity,
    BackAndroid,
    View,
    Text
} from 'react-native';
import Icon from "react-native-vector-icons/FontAwesome";
import Login from './Login';
import DetailToolBar from '../general/DetailToolBar';
import DataSet from './DataSet';

let windowH = Dimensions.get('window').height;
let windowW = Dimensions.get('window').width;

let MOCK_DATA = [{name:'流量播放提醒',icon:'download'},{name:'清楚缓存',icon:'database'},{name:'去评分',icon:'pencil'}
,{name:'联系我们',icon:'phone'},{name:'用户协议',icon:'file'},{name:'版本号',icon:'github'}];

export default class Person extends Component {
    constructor(props){
        super(props);
        this.state = {
            setDataSource: new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!=r2}),
            settingExpand:false,
        }
    }

    componentDidMount(){
        console.log(this.props);
    }

    /*componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }*/

    onBackAndroid=()=>{
        const {navigator} = this.props
        const routers = navigator.getCurrentRoutes().length;
        if(routers>1){
            navigator.pop();
            return true
        }
        return false
    }

    expandSetting =()=> {
        this.state.settingExpand?this.setState({settingExpand:false}):this.setState({settingExpand:true});
    }

    toLogin=()=>{
        const {navigator} = this.props;
        navigator.push({
            component:Login,
            name:'login'
        })
    }

    toDataSet=()=>{
        const{navigator} = this.props;
        navigator.push({
            component:DataSet,
            name:'dataset'
        })
    }

    renderSetting=(data)=>{
        return(
            <TouchableOpacity>
                <View style = {style.oSetContainer}>
                    <View style = {style.oSetIcon}>
                        <Icon name = {data.icon} color="#6c7a93" size = {windowH/30}/>
                    </View>
                    <View style = {style.oSetText}>
                        <Text>{data.name}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    render(){
        return(
                <View style = {style.mainContainer}>
                    <DetailToolBar
                        navigator = {this.props.navigator}
                        text = ''
                        color = '#92c1dc'
                    />
                    <View style={style.blueBG}>
                        <TouchableOpacity
                            onPress = {this.toLogin}
                        >
                            <View style = {style.loginButton}>
                                <View style = {style.loginIcon}>
                                    <Icon size = {60} name="universal-access" color= "#6c7a93" />
                                </View>
                                <Text style = {style.loginText}>未登录</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style = {style.settingContainer}>
                        <Text style = {style.settingText}>设置</Text>
                    </View>

                    <View>
                        <TouchableOpacity>
                            <View style = {style.moonContanier}>
                                <View style = {style.moonIcon}>
                                    <Icon name = 'moon-o' color="#6c7a93" size = {windowH/30}/>
                                </View>
                                <View style = {style.moonText}>
                                    <Text>夜间模式</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={this.toDataSet}
                        >
                            <View style = {style.moonContanier}>
                                <View style = {style.moonIcon}>
                                    <Icon name ='users' color="#6c7a93" size = {windowH/30}/>
                                </View>
                                <View style = {style.moonText}>
                                    <Text>个人资料</Text>
                                </View>
                            </View>
                        </TouchableOpacity>

                        <View>
                            <TouchableOpacity
                                onPress = {this.expandSetting}
                            >
                                <View style = {[style.moonContanier,{borderColor:this.state.settingExpand?'#fff':'#e8e8e8',borderBottomWidth:1}]}>
                                    <View style = {style.moonIcon}>
                                        <Icon name = 'cogs' color="#6c7a93" size = {windowH/30}/>
                                    </View>
                                    <View style = {style.setText}>
                                        <Text>其他设置</Text>
                                        <Icon name={this.state.settingExpand?'angle-down':'angle-right'} size={25} color='#6c7a93' style = {style.setIcon}/>
                                    </View>
                                </View>
                            </TouchableOpacity>

                            <View>
                                {
                                    this.state.settingExpand?
                                        <ListView
                                            style = {style.listViewCon}
                                            dataSource={this.state.setDataSource.cloneWithRows(MOCK_DATA)}
                                            renderRow={this.renderSetting}
                                        />:<View/>
                                }
                            </View>
                        </View>
                    </View>
                </View>
        )
    }
}

const style = StyleSheet.create({
    mainContainer:{
        width:windowW,
        height:windowH,
        backgroundColor:'#fff'
    },
    blueBG:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:windowH/4,
        width:windowW,
        backgroundColor:'#92c1dc'
    },
    loginButton:{
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'space-between',
        height:windowH/7
    },
    loginIcon:{
        height:60,
        width:60,
        borderRadius:30,
        backgroundColor:'#fff'
    },
    loginText:{
        textAlign:'center',
        color: '#fff'
    },
    settingContainer:{
        backgroundColor:'#f8f8f8',
        width:windowW,
        height:windowH/20,
        justifyContent:'center'
    },
    settingText:{
        color:'#9c9c9c'
    },
    moonContanier:{
        flexDirection:'row',
        width:windowW,
        height:windowH/15,
        alignItems:'center',
        justifyContent:'space-between'
    },
    moonIcon:{
        width:windowW/10,
        alignItems:'center'
    },
    moonText:{
        width:windowW*27/30,
        borderColor:'#e8e8e8',
        borderBottomWidth:1,
        height:windowH/15,
        justifyContent:'center'
    },
    setText:{
        width:windowW*27/30,
        height:windowH/15,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    setIcon:{
        marginRight:windowW/15
    },
    oSetContainer:{
        flexDirection:'row',
        width:windowW*9/10,
        height:windowH/15,
        alignItems:'center',
        justifyContent:'space-between',
        marginLeft:windowW/10
    },
    oSetIcon:{
        width:windowW/10,
        alignItems:'center'
    },
    oSetText:{
        width:windowW*24/30,
        borderColor:'#e8e8e8',
        borderBottomWidth:1,
        height:windowH/15,
        justifyContent:'center'
    },
    listViewCon:{
        height:windowH*11/30
    }
})