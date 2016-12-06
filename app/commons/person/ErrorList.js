/**
 * Created by miracle on 2016/11/30.
 */
import React,{Component} from 'react';
import {
    Dimensions,
    TouchableOpacity,
    StyleSheet,
    View,
    Text
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'
let windowW = Dimensions.get('window').width;

/*错误信息*/
export class ErrorInfo extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={styles.errorContainer}>
                <Icon name="exclamation" size={20} color='red' />
                <Text style = {styles.errorText}>{this.props.info}</Text>
            </View>
        )
    }
}

/*输入框*/
export class ListContainer extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View style={styles.listContainer}>
                <View style = {styles.listIcon}>
                    <Icon name = {this.props.iconname} size = {30} color="#ccc"/>
                </View>
                <View style={styles.listText}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}

export class OperateButton extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <TouchableOpacity
                onPress={this.props.operate}
                style = {styles.loginButton}
            >
                <Text style={styles.loginText}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    listText:{
        width:windowW*3/5
    },
    listIcon:{
        width:60,
        justifyContent:'center',
        alignItems:'center'
    },
    listContainer:{
        marginTop:20,
        borderRadius:5,
        width:windowW*9/10,
        height:60,
        borderColor:'#ccc',
        borderWidth:1,
        flexDirection:'row',
        alignItems:'center'
    },
    errorText:{
        marginLeft:5,
        color:'red'
    },
    errorContainer:{
        flexDirection:'row',
        margin:10
    },
    loginText:{
        color:'#fff',
        fontSize:20,
        letterSpacing:50
    },
    loginButton:{
        marginTop:20,
        width:windowW*9/10,
        height:60,
        backgroundColor:'#3ca1d6',
        justifyContent:"center",
        alignItems:'center'
    },
})