/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ListView,
    Text,
    View
} from 'react-native';
import MusicPlayer from '../general/MusicPlayer';
import musicData from "../mockedData/music.json";
import MusicItem from "../general/MusicItem"

let music = musicData.music;
let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

export default class Music extends Component {
    constructor(props){
        super(props)
        this.state={
            musicDataSource: new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!=row2
            })
        }
    }

    _renderRow=(rowData,sectionID,rowID)=>{
        return(
            <MusicItem
                rowData = {rowData}
                rowID = {rowID}
            />
        )
    }
    render(){
        return(
            <View>
                <MusicPlayer
                    path='http://m10.music.126.net/20170429222217/9349de897123db7bd81b757e26421d86/ymusic/c042/2a2c/06b9/e032442cea29abd11470fb190055564c.mp3'
                />
                <View style={styles.listContainer}>
                    <ListView
                        style={styles.musicList}
                        dataSource={this.state.musicDataSource.cloneWithRows(music)}
                        renderRow={this._renderRow}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    listContainer:{
        position:'absolute',
        top:windowH/8,
        borderTopWidth:1,
        borderColor:'#d2d6d5'
    },
    musicList:{
        height:windowH*201/300
    }
})