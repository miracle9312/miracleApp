/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {request} from '../utils/RequestUtil';
import Person from '../person/Person';
import ToolBar from '../general/ToolBar'

export default class Square extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.testrequest();
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
        const {navigator} = this.props
        return(
            <View>
                <ToolBar navigator = {navigator} name='miracle' />
                <TouchableOpacity onPress = {this.onPress}>
                    <View>
                        <Icon name="rocket" size={30} color="#900" />
                        <Text>home</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}