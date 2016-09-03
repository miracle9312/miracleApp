/**
 * Created by miracle on 2016/9/1.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
} from 'react-native';
import Miracle from './Miralce';

export default class LittleBlack extends Component {
    constructor(props){
        super (props)
    }
    toMiracle=()=>{
        const{navigator} = this.props
        navigator.push({
            component:Miracle,
            name:'miracle'
        })
    }
    render(){
        return(
            <TouchableOpacity  onPress={this.toMiracle}>
                <View
                    style={{width:80,height:40,borderRadius:5,backgroundColor:'green',justifyContent:'center'}}
                >
                    <Text style={{textAlign:'center'}}>hello LittleBlack</Text>
                </View>
            </TouchableOpacity>
        )
    }

}