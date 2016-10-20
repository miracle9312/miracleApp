/**
 * Created by miracle on 2016/10/8.
 */
import React,{Component} from 'react';
import Icon from 'react-native-vector-icons/Ionicons'

export default class DetailToolBar extends Component {
    constructor(props){
        super(props)
    }

    _onIconClicked=()=>{
        this.props.onIconClicked();
    };

    render(){
        return(
            <Icon.ToolbarAndroid
                style={{backgroundColor: '#ffffff', height:56,alignItems:'center'}}
                title={this.props.text}
                titleColor="#475a69"
                navIconName="md-arrow-back"
                onIconClicked={this._onIconClicked}
            />
        )
    }
}