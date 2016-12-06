/**
 * Created by miracle on 2016/10/30.
 */
import React,{Component} from 'react';
import {
    TextInput,
    View,
    Text,
} from 'react-native';

export default class DiaryDetail extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <Text>DiaryDetail</Text>
                <TextInput
                    multiline={true}
                    numberOfLines={10}
                    underlineColorAndroid='transparent'
                />
            </View>
        )
    }
}