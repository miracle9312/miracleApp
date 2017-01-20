/**
 * Created by miracle on 2016/9/18.
 */
import React,{Component} from 'react';
import {
    ViewPagerAndroid,
    Text,
    Image,
    StyleSheet,
    View,
    Dimensions
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {json2TimeStamp} from '../utils/Formatutil';
import {connect} from 'react-redux';
import fetchMood from '../../redux/action/mood';
import {isNotEmpty} from '../utils/CommonUtil';
import * as types from '../../redux/actiontype/actionTypes'

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

class Card extends Component {
    constructor(props){
        super (props)
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    render(){
        const {mood,dataList} = this.props;
        if(mood.type == types.FETCH_MOOD){
            return (
                <View></View>
            )
        }else if(mood.type== types.FETCH_MOOD_SUCCESS){
            console.log(mood);
            let moodData = Object.values(mood.data);
            return (
                <View style = {styles.container}>
                    <ViewPagerAndroid
                        initialPage={0}
                        style={{flex: 1}}
                    >
                        {
                            moodData.map((data, index)=> {
                                let moodContent = data.mood;
                                let comment = data.comments;
                                return (
                                    <View
                                        key={index}
                                        style={styles.cardContainer}>
                                        <View style={styles.card}>
                                            <Image
                                                resizeMode='contain'
                                                style={styles.cardImage}
                                                source={{uri: moodContent.imageurl}}/>
                                            <View style={styles.titleContainer}>
                                                <Text style={styles.titleText}>VOL.{moodContent.id}</Text>
                                                <Text style={styles.titleText}>{moodContent.user_name}作品</Text>
                                            </View>
                                            <View style={styles.contentContainer}>
                                                <Text style={styles.contentText}>{moodContent.mood_content}</Text>
                                            </View>
                                            <View style={styles.weatherContainer}>
                                                <Icon name='sun-o' size={18} color='#fac950'/>
                                                <Text>{data.position} {json2TimeStamp(moodContent.mood_publish_time)}</Text>
                                            </View>
                                        </View>
                                        <View style={styles.operateContainer}>
                                            <View style={styles.opIconContainer}>
                                                <Icon name="pencil-square-o" size={25} color='#aecce6'
                                                      style={styles.opIcon}/>
                                                <Text style={styles.opText}>小记</Text>
                                            </View>
                                            <View style={styles.opIconContainer}>
                                                <Icon name="share-square-o" size={25} color="#aecce6"
                                                      style={styles.opIcon}/>
                                            </View>
                                        </View>
                                    </View>
                                )
                            })}
                    </ViewPagerAndroid>
                </View>
            )
        }

    }
}

/*function mapStateToProps (state) {
    const {mood} = state;
    return {mood};

}

export default connect(mapStateToProps)(Card);*/

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        width:windowW,
        height:windowH-130
    },
    cardContainer:{
        marginTop:windowH/50,
        width:windowW,
        height:windowH*3/5,
        flex:1,
        flexDirection:'column',
        alignItems:'center',
    },
    card:{
        width:windowW*23/25,
        height:windowH*2/3,
        borderColor:'#eeeeee',
        borderWidth:1,
        backgroundColor:'#ffffff'
    },
    cardImage:{
        height:windowW*2/3,
        width:windowW*7/8,
        margin:windowW/50
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginLeft:windowW/50,
        marginRight:windowW/50
    },
    titleText:{
        color:'#c0c0c0'
    },
    contentContainer:{
        width:windowW*23/25,
        padding:windowW/50
    },
    contentText:{
        fontWeight:'200',
        textAlign:'justify',
        color:'#343434'
    },
    weatherContainer:{
        flexDirection:'row',
        position:'absolute',
        bottom:windowW/25,
        right:windowW/25
    },
    operateContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:windowW*23/25
    },
    opIconContainer:{
        flexDirection:'row'
    },
    opIcon:{
        margin:20
    },
    opText:{
        marginTop:20
    }
})