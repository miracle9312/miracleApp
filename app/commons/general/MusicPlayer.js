/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    Text
} from 'react-native'
import {
    Player,
} from 'react-native-audio-toolkit';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slider from 'react-native-slider';
import {ToastShort} from '../utils/ToastUtil';

var windowW = Dimensions.get('window').width;
let path;

export default class MusicPlayer extends Component {
    constructor(props){
        super(props)
        this.state = {
            playPauseStatus:false,
            progress:0,
        }
    }

    componentWillMount(){
        path = this.props.path;
        this.audioPlayer = new Player(path);
        this.reloadPlayer();
        this.lastSeek = 0;
        this._progressInterval = setInterval(() => {
            if (this.audioPlayer && this._shouldUpdateProgressBar()) {
                this.setState({progress: Math.max(0, this.audioPlayer.currentTime) / this.audioPlayer.duration});
            }
        }, 100);
    }

    _shouldUpdateProgressBar=()=> {
        return Date.now() - this.lastSeek > 200;
    }

    componentWillUnmount(){
        clearInterval(this._progressInterval);
    }

    updateState = () =>{
        this.setState({
            playPauseStatus: this.audioPlayer && this.audioPlayer.isPlaying &&this.audioPlayer.isPlaying<this.audioPlayer.duration ? true:false
        });
    }

    reloadPlayer=()=>{
        if(this.audioPlayer){
            this.audioPlayer.destroy();
        }
        this.audioPlayer = new Player(path,{
            autoDestroy:false
        }).prepare((err)=>{
            if(err){
                console.log(err)
            }else{
                console.log('success')
            }
        })
        this.updateState()
    }


    playPause = () =>{
        this.audioPlayer.playPause((err)=>{
            if(err){
                ToastShort(err.message)
                return
            }
            this.updateState()
        })
    }

    _seek=(per)=>{
        if(!this.audioPlayer){
            return;
        }
        this.lastSeek = Date.now();
        let position = per*this.audioPlayer.duration;
        this.audioPlayer.seek(position)
    }

    render(){
        return(
            <View style = {styles.playerContainer}>
                <View style = {styles.contentContainer}>
                    <View style = {styles.imageContainer}>
                        <Image style={styles.songImage} source={require('../image/AmericanGospel.jpg')} />
                    </View>
                    <View style={styles.songContent}>
                        <Text numberOfLines={1} style= {styles.songText}>Say(俄剧《战斗民族养成记asdfasdfasdfasdfasdfasf》)</Text>
                        <Text>American Gospel</Text>
                    </View>
                    <TouchableOpacity
                        style = {styles.player}
                        onPress = {this.playPause}>
                        <Icon name = {this.state.playPauseStatus?'pause':'play'} size={25} color='#86bef8'/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Slider
                        onSlidingComplete={this.updateState}
                        value={this.state.progress}
                        step={0.001}
                        onValueChange={this._seek}
                        style={customStyles8.container}
                        trackStyle={customStyles8.track}
                        thumbStyle={customStyles8.thumb}
                        minimumTrackTintColor='#86bef8'
                        thumbTouchSize={{width: 50, height: 40}}
                    />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    playerContainer:{
        width:windowW,
        backgroundColor:'#fff',
        position:'absolute',
        left:0,
        top:0
    },
    contentContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    imageContainer:{
        justifyContent:'center',
        alignItems:'center',
        margin:5
    },
    songImage:{
        width:50,
        height:50
    },
    songContent:{
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:windowW*2/3
    },
    songText:{
        fontSize:16,
        color:'#000'
    },
    player:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:50,
        backgroundColor:'#fff',
        borderRadius:25,
        borderColor:'#86bef8',
        borderWidth:1,margin:5
    }
})

//进度条样式
var customStyles8 = StyleSheet.create({
    container: {
        height: 20,
    },
    track: {
        height: 2,
        backgroundColor: '#fff',
    },
    thumb: {
        width: 5,
        height: 5,
        backgroundColor: '#86bef8',
        borderRadius: 10 / 2,
        shadowColor: '#86bef8',
        shadowOffset: {width: 0, height: 0},
        shadowRadius: 2,
        shadowOpacity: 1,
    }
});