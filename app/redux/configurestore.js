/**
 * Created by miracle on 2016/8/13.
 */
import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducers from './reducers/index';
import createLogger from 'redux-logger';

const loggerMiddleware = createLogger()
const createStoreMiddleware = applyMiddleware(thunkMiddleware,loggerMiddleware)(createStore)

export default function configureStore(initialstate){
    const store = createStoreMiddleware(rootReducers,initialstate)
    return store
}