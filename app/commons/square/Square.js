/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    Image
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Friend extends Component {
    constructor(props){
        super(props)
    }

    render(){
        const{test} = this.props
        return(
            <View>
                <Icon name="rocket" size={30} color="#900" />
                <Text>{test.word}</Text>
            </View>
        )
    }
}