/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    Dimensions,
    TouchableOpacity,
    Image,
    View
} from 'react-native';
import {tabItems} from '../utils/RouterUtil'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height

export default class MainToolBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeItem:'square'
        }
    }
    componentDidMount(){
        console.log(this.props)
    }
    selectItem=(name)=>{
        const {onSelect} = this.props
        this.setState({
            activeItem:name
        })
        onSelect(name);
    }
    render(){
        return(
            <View style={{height:56,flexDirection:'row'}}>
                {
                    tabItems.map(
                        (item,i)=>{
                            return(
                                <View
                                    key={i}
                                    style={item.name==this.state.activeItem?{backgroundColor:'#eb5533'}:{}}
                                >
                                    <TouchableOpacity
                                        style={{justifyContent:'center',alignItems:'center',width:windowW/4}}
                                        onPress={this.selectItem.bind(this,item.name)}
                                    >
                                        <Image
                                            source={item.path}
                                            style={{height:30,width:30}}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )
                        }
                    )
                }
            </View>
        )
    }
}