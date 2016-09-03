/**
 * Created by miracle on 2016/8/14.
 */

import React,{Component} from 'react'
import {
    View,
    Navigator
} from 'react-native'
import Miracle  from '../test/Miralce'

export default class App extends Component {
    constructor(props){
        super (props)
    }
    componentDidMount(){

    }
    render(){
        return(
        <Navigator
            initialRoute={{name:'miracle',component:Miracle}}
            configureScene = {(route)=>{
                return Navigator.SceneConfigs.HorizontalSwipeJump
            }}
            renderScene = {(route,navigator)=>{
                let Component = route.component
                return <Component {...route.params} navigator={navigator} />
            }}

        />
        )
    }
}