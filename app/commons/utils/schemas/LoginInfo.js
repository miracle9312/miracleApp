/**
 * Created by miracle on 2016/12/4.
 */
export const LoginInfo={
    name:'LoginInfo',
    primaryKey:'uid',
    properties:{
        uid:{type:'int'},
        username:{type:'string',optional:true},
        picsize:{type:'string',optional:true},
        is_admin:{type:'int',optional:true},
        _token:{type:'string',optional:true}
    }
}