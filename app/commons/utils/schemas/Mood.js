/**
 * Created by miracle on 2016/12/26.
 */

export const Mood = {
    name:"Mood",
    primaryKey:"id",
    properties:{
        "id":{type:"string",optional:false},
        "user_id":{type:"int",optional:true},
        "mood_content":{type:"string",optional:true},
        "mood_publish_time":{type:"int",optional:true},
        "user_name":{type:"string",optional:true},
        "imageurl":{type:"string",optional:true},
        "comments":{type:"list",objectType:"MoodComment"}
    }
}