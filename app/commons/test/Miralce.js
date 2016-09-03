/**
 * Created by miracle on 2016/9/1.
 */
import React,{Component} from 'react'
import {
    View,
    TouchableOpacity,
    Text
} from 'react-native'
import Littleblack from './LittleBlack'

export default class Miracle extends Component {
    constructor(props){
        super(props);
    }
    componentDidMount(){

    }
    toLittleB=()=>{
        const {navigator} =this.props
        navigator.push({
            component:Littleblack,
            name:'littleblack'
        })
    }
    render(){
        return(
            <TouchableOpacity
                onPress={this.toLittleB}>
                <View
                    style={{width:80,height:40,borderRadius:5,backgroundColor:'green',justifyContent:'center'}}
                >
                    <Text style={{textAlign:'center'}}>hello miracle</Text>
                </View>
            </TouchableOpacity>
        )
    }
}