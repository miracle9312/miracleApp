/**
 * Created by miracle on 2016/10/8.
 */
import React,{Component} from 'react';
import {
    WebView,
    StyleSheet,
    View,
    Text
} from 'react-native';
import DetailToolBar from '../general/DetailToolBar';
import DetailBottom from '../general/DetailBottom';
import {request} from '../utils/RequestUtil'

export default class ReadDetail extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    backToRead=()=>{
        const {navigator} = this.props;
        navigator.pop();
    }
    render(){
        return(
            <View style={{flex:1,flexDirection:'column'}}>
                <DetailToolBar
                    onIconClicked={this.backToRead}
                    text="连载"
                />
                <WebView
                    source={{uri:'http://m.wufazhuce.com/article/1552'}}
                />
                <DetailBottom />
            </View>
        )
    }
}

