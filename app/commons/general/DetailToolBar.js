/**
 * Created by miracle on 2016/10/8.
 */
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'
import {isNotEmpty} from '../utils/CommonUtil';
import Main from '../Main'

export default class DetailToolBar extends Component {
    constructor(props){
        super(props)
    }

    onBackAndroid=()=>{
        const {navigator,toPage} = this.props;
        const routers = navigator.getCurrentRoutes().length;
        if(routers>1){
            switch(toPage){
                case 'main':
                    navigator.push({
                        component:Main,
                        name:"main"
                    });
                    break
                default:
                    navigator.pop();
            }
            return true
        }
        return false
    }


    render(){
        return(
            <Icon.ToolbarAndroid
                style={{backgroundColor: this.props.color, height:56,alignItems:'center'}}
                title={this.props.text}
                titleColor="#475a69"
                navIconName="md-arrow-back"
                onIconClicked={this.onBackAndroid}
            />
        )
    }
}