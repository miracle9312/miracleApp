/**
 * Created by miracle on 2016/10/29.
 */

import React,{Component} from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Dimensions,
    Text,
    View,
} from 'react-native';
import {json2TimeStamp} from '../utils/Formatutil'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

export default class DiaryItem extends Component {
    constructor(props){
        super (props)
    }

    render(){
        return(
            <TouchableOpacity>
                <View style={styles.itemContainer}>
                    <View style = {styles.itemContent}>
                        <View style={styles.titleContainer}>
                            <Text style = {styles.titleContent}>{this.props.title}</Text>
                        </View>
                        <Text>{json2TimeStamp(this.props.createDate).substring(0,10)}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    itemContainer:{
        width:windowW,
        backgroundColor:'#fff',
        alignItems:'center'
    },
    itemContent:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        height:windowH/11,
        width:windowW*9/10,
        borderColor:'#cbcbcb',
        borderBottomWidth:1
    },
    titleContainer:{
        width:windowW*3/5
    },
    titleContent:{
        color:'#181818'
    }
})

