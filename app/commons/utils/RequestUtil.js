/**
 * Created by miracle on 2016/9/10.
 */

import {isNotEmpty} from './CommonUtil';
import {API_HOST} from './Urls'
import axios from 'axios'


/**将对象转换成地址后面的字符串形式
 * @param Object param*/
export function toQueryString(param){
    if(isNotEmpty(param)){
        return Object.keys(param).sort().map((key)=>{
            let val = param[key];
            if(Array.isArray(val)){
               return val.sort().map((val1)=>{
                    let result = encodeURIComponent(key)+'='+encodeURIComponent(val1)
                    return result
                }).join('&')
            }
            return  encodeURIComponent(key)+'='+encodeURIComponent(param[key]);
        }).join('&')
    }else{
        return '';
    }
}

/**发送请求公共方法
 * @param String url
 * @param String method
 * @param Object params*/
export function request(url,method,params){
    if(!isNotEmpty(method)){
        methodStr='get'
    }
    let methodStr = method.toLowerCase();
    return new Promise((resolve,reject)=>{
        axios.request({
            url:url,
            baseURL:API_HOST,
            method:methodStr,
            params:params,
        }).then((response)=>{
            if(response.status==200){
                resolve(response.data)
            }else{
                reject(response)
            }
        }).then((responseData)=>{
            resolve(responseData)
        }).catch((err)=>{
            reject(err)
        })
    });
}
