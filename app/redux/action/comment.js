/**
 * Created by miracle on 2017/1/10.
 */
import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import DeviceStorage from '../../commons/utils/DeviceStorage';
import {isNotEmpty} from '../../commons/utils/CommonUtil';
import {API_COMMENT} from '../../commons/utils/Urls';

let user = DeviceStorage.queryObject('LoginInfo')[0];

export default function addComment(param){
    console.log(user);
    let params = {};
    if(!isNotEmpty(user)){
        alert('登录后才能进行评论');
        return dispatch=> dispatch(loginFail());
    }else {
        //构造参数params
        let commenttime = new Date();
        params.publisher = user.uid;
        params.commenttime = commenttime;
        params._token = user._token;
        params.user = user.uid;
        Object.assign(params, param)
        return dispatch=> {
            //服务器新增一条评论
            return request(API_COMMENT, 'POST', params).then(
                response=> {
                    console.log(response.data);
                    let commentParam = params;
                    commentParam.commentid = response.data.id;
                    delete commentParam._token;
                    delete commentParam.user;
                    /*//将新增的评论写进本地数据库
                    console.log(DeviceStorage.createSingleObject('MoodComment', commentParam));
                    console.log(DeviceStorage.queryObject('MoodComment'));*/
                    let stateParam = commentParam;
                    let username = DeviceStorage.queryObject('PersonInfo')[0].nickName;
                    stateParam.username = username;
                    //在state中更新
                    dispatch(addedComment(stateParam))
                }
            )
        }
    }
}

function addedComment(commentData){
    return {
        type:types.ADD_COMMENT_SUCCESS,
        data:commentData
    }
}

function loginFail (){
    return{
        type:types.COMMENT_AFTER_LOGIN
    }
}