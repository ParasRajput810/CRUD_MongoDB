const mongoose = require("mongoose");

const { Schema } = mongoose;

const schema = new Schema({
    content : {
        type : String,
        required : true
    },
    
} , {timestamps : true});

const comment = mongoose.model('comment' , schema);

module.exports = comment;