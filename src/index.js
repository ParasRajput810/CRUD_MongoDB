const express = require("express");
const connect = require("./config/databaseConfig");
const {PORT} = require("./config/serverConfig");
const Tweet = require("./models/schema");
const comment = require("./models/comment");
const tweetrepository = require("./repository/tweetrepository");

const serverstartup = async()=>{
    const app = express();

    app.listen(PORT , async()=>{
        console.log("Connecting to server");
        await connect();
        // const tweet = await Tweet.create({
        //     content : "this is my third tweet",
        //     username : "pr8101999@gmail.com"
        // })
        // console.log(tweet);

        // const tweet = await Tweet.create({
        //     content : "this is my second tweet with comment",
        //     username : "pr8101999@gmail.com"
        // });
        // console.log(tweet);
        // const Comment= await comment.create({
        //     content: "this is my second comment"
        // })
        // tweet.comment.push(Comment);
        // tweet.save();
        const TweetRepository = new tweetrepository();

        const Tweet = await TweetRepository.get('63d2146e8d8a9c1af2856c33');

        console.log(Tweet);

        console.log("connected to server successfully");
    })
}

serverstartup();