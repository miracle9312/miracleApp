/**
 * Created by miracle on 2016/9/8.
 */

export const Miracle={
    name:'Miracle',
    primaryKey:'id',
    properties:{
        id:{type:'int'},
        name:{type:'string',optional:true},
        age:{type:'int',optional:true},
        describe:{type:'string',optional:true}
    }
}