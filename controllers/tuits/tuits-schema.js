import mongoose from 'mongoose';   // load the mongoose library


const schema = mongoose.Schema({   // create the schema
    topic: String,
    username:String,
    handle:String,
    time:String,
    image:String,
    title:String,
    tuit: String,
    likes: Number,
    liked: Boolean,
    likes: Number,
    dislikes: Number,
    replies: Number,
    retuits: Number
}, 
{collection: 'tuits'});  // collection name where tuits are stored in tuiter database


export default schema;   // export schema so it can be used elsewhere
