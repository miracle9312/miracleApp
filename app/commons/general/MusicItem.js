/**
 * Created by miracle on 2016/10/29.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    Text,
    View,
    TouchableOpacity
} from 'react-native';

let windowH = Dimensions.get('window').height;
let windowW = Dimensions.get('window').width;

export default class MusicItem extends Component {
    constructor(props){
        super (props)
    }

    render(){
        return(
            <TouchableOpacity>
                <View style={styles.musicContainer}>
                    <View style={styles.numberContainer}>
                        <Text style={styles.numberText}>{parseInt(this.props.rowID)+1}</Text>
                    </View>
                    <View style = {styles.songContainer}>
                        <View style={styles.songNameContainer}>
                            <Text numberOfLines={1}>
                                <Text style={styles.songNameContent}>{this.props.rowData.name}</Text>
                                <Text>{this.props.rowData.version}</Text>
                            </Text>
                        </View>
                        <View style={styles.songAlbums}>
                            <Text>{this.props.rowData.albums}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    musicContainer:{
        flex:1,
        flexDirection:'row',
        backgroundColor:'#fff',
        width:windowW,
        height:windowH/11
    },
    numberContainer:{
        flex:2,
        justifyContent:'center',
        alignItems:'center'
    },
    numberText:{
        fontSize:16
    },
    songContainer:{
        flexDirection:'column',
        justifyContent:'center',
        borderBottomColor:'#d2d6d5',
        borderBottomWidth:1,
        flex:10
    },
    songNameContainer:{
        flex:6,
        justifyContent:'center'
    },
    songNameContent:{
        fontSize:16,
        color:'#000'
    },
    songAlbums:{
        flex:4
    }
})