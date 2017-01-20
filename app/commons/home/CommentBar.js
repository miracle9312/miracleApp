/**
 * Created by miracle on 2016/12/30.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    TextInput,
    Text,
    View,
} from 'react-native';

let windowH = Dimensions.get('window').height;
let windowW = Dimensions.get('window').width;

export default class CommentBar extends Component{
    constructor(props){
        super(props)
        this.state = {
            isEditing:false,
            text:''
        }
    }

    changeText=(text)=>{
        this.setState({
            text:text
        })
    }

    render(){
        return (
            <View style={styles.commentBarContainer}>
                <View style={styles.textContainer}>
                    <TextInput
                        underlineColorAndroid='#1aad19'
                        multiline={true}
                        autoFocus={true}
                        onChange={this.Editing}
                        onChangeText={text=>this.changeText(text)}
                        value={this.state.text}
                    />
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        onPress={this.props.onpress.bind(this,{comcontent:this.state.text,moodid:this.props.moodid})}
                        style={styles.buttonStyle}>
                        <Text style={styles.buttonText}>发送</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    commentBarContainer:{
        flexDirection:'row',
        height:windowW/6,
        alignItems:'center',
        width:windowW*23/25,
        position:'absolute',
        left:0,
        bottom:0,
        marginLeft:windowW/25,
        backgroundColor:'#fff'
    },
    textContainer:{
        width:windowW*18/25
    },
    buttonContainer:{
        justifyContent:'center',
        alignItems:'center',
        height:windowW/6,
        width:windowW*1/5
    },
    buttonStyle:{
        borderRadius:3,
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:30,
        backgroundColor:'#1aad19'
    },
    buttonText:{
        color:'#fff'
    }
})
