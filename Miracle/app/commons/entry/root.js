/**
 * Created by miracle on 2016/8/14.
 */
import React, {Component} from 'react';
import {Provider} from 'react-redux'
import App from './app'
import configureStore from '../../redux/configurestore'

const store = configureStore()

export default class Root extends Component{
    render() {
        return (
            <Provider store={store}>
                <App/>
            </Provider>
        )
    }
}
