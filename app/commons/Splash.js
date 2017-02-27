/**
 * Created by miracle on 2016/9/3.
 */
import React,{Component} from 'react';
import {
    Animated,
    Image,
    Dimensions,
    View,
    StyleSheet,
    InteractionManager
} from 'react-native';
import Main from './Main';
import {connect} from 'react-redux';
import {fetchAll} from './utils/CommonUtil';
import fetchMood from '../redux/action/mood';

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height;

class Splash extends Component {
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
        this.timer=setTimeout(()=>{
            InteractionManager.runAfterInteractions(()=>{
                const {navigator,dispatch} = this.props;
                let params={
                    id:6,
                    page:1,
                    size:10
                };
                dispatch(fetchMood(params));
                /*dispatch(fetchAll());*/
                navigator.push({
                    component:Main,
                    name:'main'
                })
            })
        },1500)
    }

    componentWillUnmount(){
        clearTimeout(this.timer);
    }

    render () {
        return(
            <View style={styles.splashContainer}>
                <Animated.Image
                    style={{opacity:this.state.fadeVal,width:windowW,height:windowH}}
                    source={require('./image/splash.png')}
                />
            </View>
        )
    }
}

export default connect ()(Splash);

const styles = StyleSheet.create({
    splashContainer:{
        backgroundColor:'#e5e7ea',
        height:windowH,
        width:windowW,
        justifyContent:'center',
        alignItems:'center'
    }
})