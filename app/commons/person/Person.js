/**
 * Created by miracle on 2016/9/16.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    BackAndroid,
    View,
    Text
} from 'react-native'

export default class Person extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        console.log(this.props);
    }

    componentWillMount() {
        BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    }
    componentWillUnmount() {
        BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    }

    onBackAndroid=()=>{
        const {navigator} = this.props
        const routers = navigator.getCurrentRoutes().length;
        if(routers>1){
            navigator.pop();
            return true
        }
        return false
    }
    render(){
        return(
            <TouchableOpacity onPress = {this.onBackAndroid}>
                <View>
                    <Text>person Page</Text>
                </View>
            </TouchableOpacity>
        )
    }
}