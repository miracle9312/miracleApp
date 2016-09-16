/**
 * Created by miracle on 2016/9/16.
 */
import React,{Component} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    Image
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Search from '../Search'
import Person from '../person/Person'

export default class ToolBar extends Component {
    constructor(props){
        super(props)
    }

    _onActionSelected=()=>{
        const {navigator} = this.props;
        navigator.push({
            name:'person',
            component:Person
        })
    };
    _onIconClicked=()=>{
        const{navigator} = this.props;
        navigator.push({
            name:'search',
            component:Search
        })
    };

    render(){
        const {name} = this.props
        return (
            <View style={{borderColor:'#c7c7c7',borderBottomWidth:1}}>
                <Icon.ToolbarAndroid
                    style={{backgroundColor: '#ffffff', height:56,alignItems:'center'}}
                    title={name}
                    titleColor="#475a69"
                    navIconName="md-search"
                    actions={[
                        { title: 'search', iconName: 'md-person', iconSize: 25,iconColor: "#b7b7b7", show: 'always' },
                    ]}
                    onIconClicked={this._onIconClicked}
                    onActionSelected={this._onActionSelected}
                />
            </View>
        );
    }
}