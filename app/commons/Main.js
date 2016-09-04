/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    View
} from 'react-native';
import {renderConfig} from './utils/RouterUtil'
import MainToolBar from './general/MainToolBar'
import {connect} from 'react-redux'
import test from '../redux/action/test'

let _navigator = null;
let currentRoute='square'

class Main extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        const {dispatch} = this.props
        dispatch(test('hello miracle i love u'))
    }

    configureScene = () =>{
         return Navigator.SceneConfigs.FadeAndroid;
    };

    renderScene=(route,navigator)=>{
        _navigator = navigator;
        return renderConfig(route,navigator,this.props)
    };

    selectMenu = (name)=>{
        _navigator.push({name:name})
    };
    render () {
        return(
            <View style={styles.container}>
                <MainToolBar style={styles.maintoolbar} onSelect= {this.selectMenu} />
                <Navigator
                    style={styles.container}
                    initialRoute={{name:currentRoute}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    maintoolbar:{
        position:'absolute',
        left:0,
        right:0,
        top:0,
        height:56
    }
})

function mapStateToProps(state){
    const {test} =state;
    return{
        test
    }
}

export default connect(mapStateToProps)(Main)