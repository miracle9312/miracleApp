/**
 * Created by miracle on 2016/10/8.
 */
import React,{Component} from 'react';
import {
    Text,
    Dimensions,
    StyleSheet,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

export default class DetailBottom extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.barContainer}>
                <View style={styles.buttonContainer}>
                    <Icon  name="heart-o" size = {25} color = '#aecce6' style={styles.opIcon}/>
                    <Text style={styles.buttonText}>443</Text>
                </View>
                <View style = {styles.gap} />
                <View style={styles.buttonContainer}>
                    <Icon  name="commenting-o" size = {25} color = '#aecce6' style={styles.opIcon}/>
                    <Text style={styles.buttonText}>443</Text>
                </View>
                <View style = {styles.gap} />
                <View style={styles.buttonContainer}>
                    <Icon name="share-square-o" size = {25} color="#aecce6" style={styles.opIcon}/>
                    <Text style={styles.buttonText}>443</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    opIcon:{
        margin:20
    },
    barContainer:{
        flexDirection:'row',
        alignItems:'center',
        borderTopWidth:1,
        borderColor:'#c7c7c7',
    },
    buttonContainer:{
        flexDirection:'row',
        width:windowW/3,
        justifyContent:'center'
    },
    gap:{
        height:windowH/15,
        width:1,
        backgroundColor:"#c7c7c7"
    },
    buttonText:{
        marginTop:windowW/16,
        color:'#9c9c9c'
    }
})