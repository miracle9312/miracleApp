/**
 * Created by miracle on 2016/12/27.
 */

export const MoodComment ={
    name:"MoodComment",
    primaryKey:"commentid",
    properties:{
        "commentid":{type:"string",optional:false},
        "moodid":{type:"string",optional:false},
        "publisher":{type:"int",optional:false},
        "commenttime":{type:"int",optional:true},
        "comcontent":{type:"string",optional:true},
        "username":{type:"string",optional:true},
    }
}