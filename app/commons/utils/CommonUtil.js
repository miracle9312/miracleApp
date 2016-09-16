/**
 * Created by miracle on 2016/9/9.
 */
/*
* judge the obj is empty or not
* @param bool flag*/
export function isNotEmpty(obj){
    let flag = false
    if(obj!==null&&obj!==undefined&&obj!==''){
        if(obj.constructor==Array){
            if(obj.length!==0){
                flag = true;
            }else{
                flag =false;
            }
        }else {
            flag = true;
        }
    }
    return flag;
}
