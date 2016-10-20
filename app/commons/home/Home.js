/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import {request} from '../utils/RequestUtil';
import Person from '../person/Person';
import Card from '../general/Card';
import home from '../mockedData/home.json';

var windowW = Dimensions.get('window').width;
var windowH = Dimensions.get('window').height;
let homeData = home.home

export default class Square extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
       /* this.testrequest();*/
        /*this.testReddit();*/
    }

    testReddit = ()=>{
        let url='https://www.reddit.com/r/pics/.json';
        let method = 'get';
        let params = {
            count:5
        }
        request(url,method,params).then((response)=>{
            console.log(response);
        });
    }
    testrequest = ()=>{
        let url = 'demand/';
        let method = 'get';
        let data = {
            size:8,
            page:1,
            sort:6,
            uid:3
        }
        request(url,method,data).then((response)=>{
            console.log(response,'square')
        })
    }
    onPress = ()=>{
        const {navigator} = this.props
        navigator.push({
            name:'person',
            component:Person,
        })
    }

    render(){
        return(
            <View style={styles.container}>
                <Card dataList={homeData} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        backgroundColor:'#ffffff',
        width:windowW,
        height:windowH-130
    },
})