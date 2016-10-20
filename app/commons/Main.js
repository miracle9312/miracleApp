/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    StyleSheet,
    Navigator,
    View
} from 'react-native';
import {renderConfig} from './utils/RouterUtil';
import MainToolBar from './general/MainToolBar';
import {connect} from 'react-redux';
import test from '../redux/action/test';
import ToolBar from './general/ToolBar';

let _navigator = null;
let currentRoute='music';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state={
            name:'music'
        }

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

    selectMenu = (item)=>{
        _navigator.push({name:item.name});
        this.setState({
            name:item.barName
        });
    };
    render () {
        return(
            <View style={styles.container}>
                <ToolBar navigator = {this.props.navigator} name={this.state.name} />
                <Navigator
                    style={styles.container}
                    initialRoute={{name:currentRoute}}
                    configureScene={this.configureScene}
                    renderScene={this.renderScene}
                />
                <MainToolBar style={styles.maintoolbar} onSelect= {this.selectMenu} />
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
        bottom:0,
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