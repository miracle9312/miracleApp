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
import {json2TimeStamp} from '../utils/Formatutil'

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

export default class Card extends Component {
    constructor(props){
        super (props)
    }

    componentWillMount(){

    }

    componentDidMount(){
    }

    render(){
        const {dataList} = this.props
        return(
            <ViewPagerAndroid
                initialPage={0}
                style={{flex:1}}
            >
                {
                    dataList.map((data,index)=>{
                        return(
                            <View
                                key={index}
                                style={styles.cardContainer}>
                                <View style={styles.card}>
                                    <Image
                                        resizeMode='contain'
                                        style={styles.cardImage}
                                        source={{uri:data.pic}}/>
                                    <View style={styles.titleContainer}>
                                        <Text style={styles.titleText}>VOL.{data.vol}</Text>
                                        <Text style={styles.titleText}>{data.title}  {data.author}作品</Text>
                                    </View>
                                    <View style={styles.contentContainer}>
                                        <Text style={styles.contentText}>{data.content}</Text>
                                    </View>
                                    <View style={styles.weatherContainer}>
                                        <Icon name='sun-o' size={18} color='#fac950'/>
                                        <Text>{data.position} {json2TimeStamp(data.timestamp)}</Text>
                                    </View>
                                </View>
                                <View style={styles.operateContainer}>
                                    <View style={styles.opIconContainer}>
                                        <Icon name="pencil-square-o" size = {25} color='#aecce6' style={styles.opIcon}/>
                                        <Text style={styles.opText}>小记</Text>
                                    </View>
                                    <View style={styles.opIconContainer}>
                                        <View style={styles.opIconContainer}>
                                            <Icon  name="heart-o" size = {25} color = '#aecce6' style={styles.opIcon}/>
                                            <Text style={styles.opText}>{data.collected}</Text>
                                        </View>
                                        <Icon name="share-square-o" size = {25} color="#aecce6" style={styles.opIcon} />
                                    </View>
                                </View>
                            </View>
                        )
                    })}
            </ViewPagerAndroid>
        )
    }
}

const styles = StyleSheet.create({
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