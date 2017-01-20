/**
 * Created by miracle on 2016/12/23.
 */
import * as types from '../actiontype/actionTypes';
import {request} from '../../commons/utils/RequestUtil';
import {API_MOOD} from '../../commons/utils/Urls';
import DeviceStorage from '../../commons/utils/DeviceStorage';
import {isNotEmpty} from '../../commons/utils/CommonUtil';

export default function fetchMood (params){
    let id = params.id;
    params.id = undefined;
    let localMood = DeviceStorage.queryObject('Mood');
    //是否从本地缓存获取数据标志
    let fromLocal = false;
    if(isNotEmpty(localMood)){
        fromLocal = false;
    }
    return dispatch=>{
        dispatch(fetchingMood());
        if(fromLocal){

        }else{
            return request(API_MOOD+'/'+id,'GET',params).then(
                response=>{
                    let responseData = response.data;
                    //responseData里面保存的是responseData在函数中最终值，对responseData做任何修改都要谨慎
                    dispatch(fetchedMood(response.data));
                    //将数据写入本地缓存
                    let moodData = Object.values(responseData);
                    moodData.map(
                        (mood,i)=>{
                            let comments = mood.comments;
                            DeviceStorage.createObjectList('MoodComment',comments);
                            let moodData = mood.mood;
                            DeviceStorage.createSingleObject('Mood',moodData);
                        }
                    )
                    /**
                     * 利用realm列表属性将数据写入 实验失败！
                     * */
                    /*let moodData = response.data[0];
                     let list = moodData.comments;
                     moodData.comments = [];
                     DeviceStorage.createSingleObject('Mood',moodData);
                     let localMood = DeviceStorage.queryNativeObject('Mood')[0];
                     console.log(DeviceStorage.createSingleObjectWithList(localMood,'comments',list));
                     console.log(DeviceStorage.queryObject('Mood'));*/
                    /*let moodData = Object.values(response.data);
                    moodData.map(
                        (mood)=>{
                            let lists = mood.comments;
                            let moodData = mood.mood;
                            let moodid = moodData.id;
                            DeviceStorage.createSingleObject('Mood',moodData);
                            let filter = 'id="'+moodid+'"';
                            let localMood = DeviceStorage.queryObjByFilter('Mood',filter)[0];
                            console.log(DeviceStorage.createSingleObjectWithList(localMood,'comments',lists));
                        }
                    );
                    console.log(DeviceStorage.queryObject('Mood'));*/
                }
            ).catch(
                err=>{
                    if(isNotEmpty(err)){
                        dispatch(fetchMoodFail());
                    }
                }
            )
        }

    }
}

function fetchingMood () {
    return {
        type:types.FETCH_MOOD
    }
}

function fetchedMood (moodData) {
    return {
        type:types.FETCH_MOOD_SUCCESS,
        data:moodData
    }
}

function fetchMoodFail () {
    return {
        type:types.FETCH_MOOD_FAIL
    }
}