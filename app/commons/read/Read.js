/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    ListView,
    Image,
    Dimensions,
    TouchableOpacity,
    View,
    Text
} from 'react-native';
import ViewPager from 'react-native-viewpager';
import read from '../mockedData/read.json';
import {isNotEmpty} from '../utils/CommonUtil';
import Label from '../general/Label';
import ReadDetail from './ReadDetail'

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;

export default class Friend extends Component {
    constructor(props){
        super(props)
        this.state={
            dataSource:new ViewPager.DataSource({
                pageHasChanged:(p1,p2)=>p1!=p2
            }),
            listSource: new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!=row2
            })
        }
    }

    componentDidMount(){

    }

    _renderPage = (dataSource,pageID)=>{
        return(
            <View>
                <TouchableOpacity onPress = {this.toDetail.bind(this,pageID)}>
                    <Image
                        source={{uri:dataSource.image}}
                        style={styles.imageContainer}
                    />
                </TouchableOpacity>
            </View>
        )
    };

    toDetail=(ID)=>{
        const {navigator} = this.props;
        console.log(navigator)
        navigator.push({
            component:ReadDetail,
            name:'readDetail',
            id:ID
        })
    };

    selectText=(type)=>{
        switch (type){
            case 1:
                return '短篇';
            case 2:
                return '连载';
            case 3:
                return '问答';
            default:
                break
        }
    };
    _renderRow=(rowData)=>{
        return(
            <TouchableOpacity onPress = {this.toDetail.bind(this,rowData.id)}>
                <View style = {styles.listContainer}>
                    <View style={styles.titleContainer}>
                        <Text style = {styles.titleText}>{rowData.title}</Text>
                        <Label
                            text={this.selectText(rowData.type)}
                        />
                    </View>
                    <Text style = {styles.titleText}>作者/{rowData.author}</Text>
                    <Text
                        numberOfLines={3}
                        style = {styles.titleText}
                    >{rowData.content}</Text>
                </View>
            </TouchableOpacity>
        )
    };

    render(){
        let imageData = null;
        let listData = null;
        if(isNotEmpty(read)){
            if(isNotEmpty(read.readNav)){
                imageData = read.readNav
            }
            if(isNotEmpty(read.readList)){
                listData = read.readList
            }
        }
        return(
            <View>
                <View style = {styles.pagerContainer}>
                    <ViewPager
                        dataSource={this.state.dataSource.cloneWithPages(imageData)}
                        renderPage={this._renderPage}
                        isLoop={true}
                        autoPlay={true}
                    />
                </View>
                <ListView
                    style = {styles.list}
                    dataSource={this.state.listSource.cloneWithRows(listData)}
                    renderRow={this._renderRow}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    pagerContainer:{
        height:windowW*3/7
    },
    list:{
        height:windowH*38/70,
        margin:windowW/50
    },
    imageContainer:{
        height:windowW*3/7,
        width:windowW
    },
    listContainer:{
        flex:1,
        flexDirection:'column'
    },
    titleContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    titleText:{
        fontSize:16,
        color:'#000',
        marginTop:windowW/50
    }
})