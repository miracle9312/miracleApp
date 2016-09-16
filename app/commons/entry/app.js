/**
 * Created by miracle on 2016/8/14.
 */

import React,{Component} from 'react'
import {
    View,
    Navigator,
    BackAndroid
} from 'react-native'
import Splash from '../Splash'
import {NaviGoBack} from '../utils/CommonUtil'

var _navigator;

export default class App extends Component {
    constructor(props){
        super (props)
    }
    componentDidMount(){

    }

    /*切换路由效果*/
    configureScene=()=>{
        return Navigator.SceneConfigs.FadeAndroid;
    };

    /*渲染页面
    * @params Object route保存所有路由
    * @params object navigator 有pop,push等方法处理路由*/
    renderScene= (route,navigator)=>{
            let Component = route.component
            _navigator = navigator;
            return <Component route={route} navigator={navigator} />
        }

    render(){
        return(
        <Navigator
            configureScene = {this.configureScene}
            renderScene = {this.renderScene}
            initialRoute={{
                component:Splash,
                name:'splash'
            }}

        />
        )
    }
}