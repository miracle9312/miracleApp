/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    Text,
    View
} from 'react-native';
import MusicPlayer from '../general/MusicPlayer';

export default class Music extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <View>
                <MusicPlayer
                    path='file:///storage/emulated/0/netease/cloudmusic/Music/123.mp3'
                />
            </View>
        )
    }
}