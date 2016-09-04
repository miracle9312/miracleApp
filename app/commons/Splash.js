/**
 * Created by miracle on 2016/9/3.
 */
import React,{Component} from 'react';
import {
    Animated,
    Image,
    Dimensions,
    View
} from 'react-native';
import Main from './Main'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height

export default class Splash extends Component {
    constructor(props){
        super(props);
        this.state={
            fadeVal : new Animated.Value(0)
        }
    }

    componentDidMount(){
        /*渲染页动画效果*/
        Animated.timing(
            this.state.fadeVal,{toValue:1}
        ).start();
        this.timer = setTimeout(()=>{
            const {navigator} = this.props
            navigator.push({
                component:Main,
                name:'main'
            })
        },1000)
    }

    componentWillUnmount(){
        clearTimeout(this.timer)
    }

    render () {
        return(
            <View style={{backgroundColor:'#eb5533',height:windowH,width:windowW,justifyContent:'center',alignItems:'center'}}>
                <Animated.Image
                    style={{opacity:this.state.fadeVal}}
                    source={require('./image/welogo.png')}
                />
            </View>
        )
    }
}