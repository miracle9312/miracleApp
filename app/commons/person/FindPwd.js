/**
 * Created by miracle on 2016/12/6.
 */
import React,{Component} from 'react';
import {
    View,
    Text
} from 'react-native';
import DetailToolBar from '../general/DetailToolBar'

export default class FindPwd extends Component{
    constructor(props) {
        super(props)
    }

    render(){
        return(
            <View>
                <DetailToolBar
                    color="#fff"
                    text="找回密码"
                    navigator={this.props.navigator}
                />
                <Text>FindPwd</Text>
            </View>
        )
    }
}