/**
 * Created by miracle on 2016/9/4.
 */
import Realm from 'realm';
import {isNotEmpty} from './CommonUtil'
import {Miracle} from './schemas/Miracle'

let realm = new Realm({schema:[Miracle],schemaVersion:5})
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
            throw new Error('test')
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
            flag = false
        }
        return flag;
    };

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
                console.log(results)
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
                result = JSON.parse(JSON.stringify(results.filtered(filter)));
                console.log(result);
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
}