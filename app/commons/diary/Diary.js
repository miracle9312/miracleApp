/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    ListView,
    View,
    Text
} from 'react-native'
import diaryData from "../mockedData/diaryList.json";
import DiaryItem from './DiaryItem';
import Icon from 'react-native-vector-icons/FontAwesome'

let diaryList = diaryData.diaryList;
let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

export default class Diary extends Component {
    constructor(props){
        super(props)
        this.state = {
            diaryDataSource : new ListView.DataSource({
                rowHasChanged:(row1,row2)=>row1!=row2
            })
        }
    }

    _renderRow=(rowData,sectionID,rowID)=>{
        return(
            <DiaryItem
                title = {rowData.title}
                createDate = {rowData.createDate}
            />
        )
    }
    render(){
        return(
            <View>
                <ListView
                    style = {styles.list}
                    renderRow={this._renderRow}
                    dataSource={this.state.diaryDataSource.cloneWithRows(diaryList)}
                />
                <TouchableOpacity
                    style = {styles.buttonContainer}
                >
                    <View style = {styles.buttonContent}>
                        <View style = {{opacity:1}}>
                        <Icon name = 'plus' size={25} color='#fff'/>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    list:{
        height:windowH*88/110
    },
    buttonContainer:{
        width:50,
        height:50,
        borderRadius:25,
        position:'absolute',
        top:windowH/2,
        right:0
    },
    buttonContent:{
        justifyContent:'center',
        alignItems:'center',
        width:50,
        height:50,
        borderRadius:25,
        opacity:0.5,
        backgroundColor:'#86a2d1'
    }
})