/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react';
import {
    Dimensions,
    TouchableOpacity,
    Image,
    View,
    StyleSheet,
    Text
} from 'react-native';
import {tabItems} from '../utils/RouterUtil';
import Icon from 'react-native-vector-icons/FontAwesome'

let windowW = Dimensions.get('window').width;
let windowH = Dimensions.get('window').height

export default class MainToolBar extends Component {
    constructor(props) {
        super(props);
        this.state={
            activeItem:'home'
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
            <View style={styles.barContainer}>
                {
                    tabItems.map(
                        (item,i)=>{
                            return(
                                <View
                                    key={i}
                                >
                                    <TouchableOpacity
                                        style={styles.buttonContainer}
                                        onPress={this.selectItem.bind(this,item.name)}
                                    >
                                       <Icon
                                           name = {item.path} color={item.name===this.state.activeItem?'#9ec0cc':'#9a9a9a'}
                                           size={25} />
                                        <View>
                                            <Text
                                                style={item.name===this.state.activeItem?{color:'#9ec0cc'}:{color:'#9a9a9a'}}>
                                                {item.nick}
                                            </Text>
                                        </View>
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

const styles = StyleSheet.create({
    buttonContainer:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        width:windowW/4
    },
    barContainer:{
        height:56,
        flexDirection:'row',
        borderTopWidth:1,
        borderColor:'#c7c7c7'
    }
})