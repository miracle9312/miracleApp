/**
 * Created by miracle on 2016/9/4.
 */
import Realm from 'realm';
import {isNotEmpty} from './CommonUtil';
import {Miracle} from './schemas/Miracle';
import {LoginInfo} from './schemas/LoginInfo';
import {PersonInfo} from './schemas/PersonInfo';
import {Pwd} from './schemas/Pwd';
import {Mood} from './schemas/Mood';
import {MoodComment} from './schemas/MoodComment'

let realm = new Realm({schema:[Miracle,LoginInfo,PersonInfo,Pwd,Mood,MoodComment],schemaVersion:26});
export default class DeviceStorage {

    /**创建一个对象
    * @param name string
    * @param obj object
    * */
    static createSingleObject =(name,obj)=>{
        let flag = false;
        try{
            if(isNotEmpty(name)&&isNotEmpty(obj)){
                realm.write(()=>{
                    realm.create(name,obj,true)
                })
            }
            flag = true;
        }catch(e){
            flag = false;
        }
        return flag;
    };

    /**创建一个对象列表
    * @param name string
    * @param list array
    * */
    static createObjectList =(name,list)=>{
        let flag = false;
        try{
            if(isNotEmpty(list)&&isNotEmpty(name)){
                if(list.constructor==Array){
                    list.map((obj)=>{
                        realm.write(()=>{
                            realm.create(name,obj,true)
                        })
                    })
                }
            }
            flag = true;
        }catch(e){
            flag = false;
        }
        return flag;
    };

    static createSingleObjectWithList (storedObj,listname,list){
        let flag = false;
        try{
            if(isNotEmpty(list)){
                let comments = storedObj.comments;
                list.map(
                    (obj)=>{
                        realm.write(()=>{
                            comments.push(obj);
                        })
                    }
                )
            }
            flag = true;
        }catch(e){
            console.log(e);
            flag = false;
        }
        return flag;
    }

    /**删除一个对象列表
     * @param name string
     * */
    static deleteTable = (name)=>{
        let flag = false;
        try{
            if(isNotEmpty(name)){
                let table = realm.objects(name);
                realm.write(()=>{
                    realm.delete(table);
                })
            }
            flag = true;
        }catch(e){
            flag = false;
        }
        return flag;
    }

    /**查询一个对象列表
     * @param name string
     * */
    static queryObject = (name) =>{
        let flag = false;
        try{
            if(isNotEmpty(name)){
                let results = JSON.parse(JSON.stringify(realm.objects(name)));
                return results;
            }
            flag = true;
        }catch(e){
            flag = false;
        }
        return flag;
    };

    static queryNativeObject =(name)=>{
        let flag = false;
        try{
            if(isNotEmpty(name)){
                let results = realm.objects(name);
                return results;
            }
            flag = true;
        }catch(e){
            flag = false;
        }
        return flag;
    };

    /**条件查询对象
     * @param name string
     * @param filter string*/
    static queryObjByFilter = (name,filter)=>{
        let flag = false;
        try {
            let result;
            if (isNotEmpty(name) && isNotEmpty(filter)) {
                let results = realm.objects(name);
                result = results.filtered(filter);
            }
            flag = true;
            return result;
        }catch(e){
            flag = false;
        }
        return flag;
    }

    /**查询数据库版本*/
    static getVersion = () => {
        console.log(realm.schema);
        let flag = false;
        try{
            let currentVersion = Realm.schemaVersion(Realm.defaultPath);
            console.log(currentVersion);
            flag = true;
            return currentVersion
        }catch(e){
            flag = false
        }
        return flag;
    }

    /*清楚所有缓存*/
    static clearAll =()=> {
        let flag = false
        try{
            realm.schema.map(
                data=>{
                    realm.write(()=>{
                        let table = realm.objects(data.name);
                        realm.delete(table);
                    })
                    flag = true;
                }
            )
        }catch(e){
            flag=false;
        }
        return flag;
    }
}