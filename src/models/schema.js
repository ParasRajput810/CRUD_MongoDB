const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
    content : {
        type : String,
        required : true
    },
    username : {
        type  :  String
    },
    comment : [{
        type : mongoose.Schema.Types.ObjectId,
        ref : 'comment'
    }]
} , {timestamps : true});

const Tweet = mongoose.model('Tweet' , schema);

module.exports = Tweet;