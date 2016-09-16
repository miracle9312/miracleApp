/**
 * Created by miracle on 2016/9/4.
 */
import React,{Component} from 'react'
import Home from '../home/Home';
import Read from '../read/Read';
import Music from '../music/Music';
import Diary from '../diary/Diary';


export const tabItems = [
    {name:'home',path:'home',nick:'首页'},
    {name:'read',path:'book',nick:'阅读'},
    {name:'music',path:'headphones',nick:'音乐'},
    {name:'diary',path:'lock',nick:'日记本'}
]

export function renderConfig (route,navigator,propsall){
    let name = route.name;
    switch (name){
        case 'home':
            return(
                <Home navigator = {navigator} route={route} {...propsall} />
            );
        break;
        case 'read':
            return(
                <Read navigator = {navigator} route={route} {...propsall}/>
            );
        break;
        case 'music':
            return(
                <Music navigator = {navigator} route={route} {...propsall} />
            );
        break;
        case 'diary':
            return(
                <Diary navigator = {navigator} route={route} {...propsall} />
            );
        break;
    }
}