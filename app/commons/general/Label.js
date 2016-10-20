/**
 * Created by miracle on 2016/10/8.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View
} from 'react-native';

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

export default class Label extends Component{
    constructor(props){
        super(props)
    }

    componentDidMount(){

    }

    render(){
        return(
            <View style = {styles.container}>
                <Text style= {styles.content}>{this.props.text}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:windowW/6,
        height:windowH/20,
        borderWidth:1,
        borderColor:"#86a2d1",
        borderRadius:5,
        justifyContent:'center'
    },
    content:{
        textAlign:'center',
        color:'#86a2d1',
        letterSpacing:12
    }
})