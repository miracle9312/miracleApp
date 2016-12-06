/**
 * Created by miracle on 2016/11/25.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class BackArrow extends Component {
    constructor(props){
        super (props)
    }
    onBackAndroid=()=>{
        const {navigator} = this.props;
        const routers = navigator.getCurrentRoutes().length;
        if(routers>1){
            navigator.pop();
            return true
        }
        return false
    }

    render(){
        return(
            <TouchableOpacity
                onPress={this.onBackAndroid}
                style = {style.backButton}>
                <Icon name='arrow-circle-left' color='#6c7a93' size={30}/>
            </TouchableOpacity>
        )
    }
}

const style= StyleSheet.create({
    backButton:{
        position:'absolute',
        left:10,
        top:10
    },
})