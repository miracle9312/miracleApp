/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react'
import Square from '../square/Square';
import Friend from '../friend/Friend';
import Local from '../local/Local';
import Search from '../search/Search';


export const tabItems = [
    {name:'square',path:require('../image/home.png')},
    {name:'local',path:require('../image/goods.png')},
    {name:'friend',path:require('../image/demand.png')},
    {name:'search',path:require('../image/user.png')}
]

export function renderConfig (route,navigator,propsall){
    let name = route.name;
    switch (name){
        case 'square':
            return(
                <Square navigator = {navigator} route={route} {...propsall} />
            );
        break;
        case 'local':
            return(
                <Local navigator = {navigator} route={route} {...propsall}/>
            );
        break;
        case 'friend':
            return(
                <Friend navigator = {navigator} route={route} {...propsall} />
            );
        break;
        case 'search':
            return(
                <Search navigator = {navigator} route={route} {...propsall} />
            );
        break;
    }
}