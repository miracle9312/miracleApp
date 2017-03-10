/**
 * Created by miracle on 2016/9/18.
 */
import React,{Component} from 'react';
import {
    TouchableHighlight,
    Modal,
    TextInput,
    ListView,
    TouchableOpacity,
    ScrollView,
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
import * as types from '../../redux/actiontype/actionTypes';
import CommentBar from './CommentBar';
import addComment from '../../redux/action/comment'
import DeviceStorage from '../utils/DeviceStorage'

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

class Square extends Component {
    constructor(props){
        super (props)
        this.state={
            isCommenting:false
        }
    }

    componentWillMount(){

    }

    componentDidMount(){

    }

    scrolling=()=>{
        this.setState({
            isCommenting:false
        });
    }

    commenting=()=>{
        this.setState(
            this.state.isCommenting?{isCommenting:false}:{isCommenting:true}
        );
    }

    sendComment=(param)=>{
        const { dispatch } = this.props;
        dispatch(addComment(param));
        this.setState({
            isCommenting:false
        })
    }

    render(){
        const {mood} = this.props;
        if(mood.type == types.FETCH_MOOD){
            return (
                <View>
                    <Text>miracle</Text>
                </View>
            )
        }else if(mood.type== types.FETCH_MOOD_SUCCESS){
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
                                        >
                                            <ScrollView
                                                onScroll={this.scrolling}
                                            >
                                                <View
                                                    style={styles.cardContainer}
                                                >
                                                    <View style={styles.card}>
                                                        <Image
                                                            resizeMode='contain'
                                                            style={styles.cardImage}
                                                            source={{uri: moodContent.imageurl}}/>
                                                        <View style={styles.titleContainer}>
                                                            <Text style={styles.titleText}>VOL.{moodContent.id}</Text>
                                                            <Text style={styles.titleText}>by--{moodContent.user_name}</Text>
                                                        </View>
                                                        <View style={styles.contentContainer}>
                                                            <Text style={styles.contentText}>{moodContent.mood_content}</Text>
                                                        </View>
                                                        <View style={styles.weatherContainer}>
                                                            <Text>{data.position} {json2TimeStamp(moodContent.mood_publish_time/1000)}</Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.operateContainer}>
                                                        <TouchableOpacity>
                                                            <View style={styles.opIconContainer}>
                                                                <Icon name="share-square-o" size={25} color="#aecce6"
                                                                      style={styles.opIcon}/>
                                                            </View>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity
                                                            onPress={this.commenting}
                                                        >
                                                            <View style={styles.opIconContainer}>
                                                                <Icon name="pencil-square-o" size={25} color='#aecce6'
                                                                      style={styles.opIcon}/>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={[{width:windowW*7/8,backgroundColor:'#eeeeee',marginBottom:30},this.state.isCommenting?{}:{}]}>
                                                        {
                                                            comment.map(
                                                                (data,index)=>{
                                                                    return (
                                                                        <View key={index}>
                                                                            <Text
                                                                                style={{color:'#576b95'}}>
                                                                                {data.username}: <Text style={{color:'#454545'}}> {data.comcontent}</Text>
                                                                            </Text>
                                                                        </View>
                                                                    )
                                                                }
                                                            )
                                                        }
                                                    </View>
                                                </View>
                                            </ScrollView>
                                            {
                                                this.state.isCommenting?<CommentBar moodid={moodContent.id} onpress={this.sendComment}/>:<View />
                                            }
                                            {/*<Modal
                                                animationType={"slide"}
                                                transparent={true}
                                                visible={this.state.isCommenting}
                                                onRequestClose={() => {alert("Modal has been closed.")}}
                                            >
                                                <View>
                                                    <TouchableHighlight
                                                        onPress={this.commenting}
                                                    >
                                                        <View
                                                            style={{width:windowW,height:windowH}}
                                                        >
                                                            <CommentBar />
                                                        </View>
                                                    </TouchableHighlight>
                                                </View>
                                            </Modal>*/}
                                        </View>
                                    )
                                })}
                        </ViewPagerAndroid>
                    </View>
            )
        }

    }
}

function mapStateToProps (state) {
    const {mood} = state;
    return {mood};

}

export default connect(mapStateToProps)(Square);

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        width:windowW,
        height:windowH-140
    },
    cardContainer:{
        width:windowW,
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