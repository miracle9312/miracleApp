/**
 * Created by miracle on 2016/8/14.
 */
import React,{Component} from 'react'
import {
    View,
    Text
} from 'react-native'
import {connect} from 'react-redux'
import getTest from '../../redux/action/test'

class App extends Component{
      constructor(props) {
        super(props);
        this.state = {};
      }

    componentDidMount() {
        const {test,dispatch} = this.props
        dispatch(getTest('mylove'))
        console.log(test)
    }

    render () {
        return (
            <View>
                <Text>hello</Text>
            </View>
        )
    }
}
function mapStateToProps(state){
    const {
        test
    } = state
    return {
        test
    }
}
export default connect(mapStateToProps)(App)
