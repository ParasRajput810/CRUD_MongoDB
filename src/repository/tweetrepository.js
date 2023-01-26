const Tweet = require("../models/schema");

class tweetrepository {
    async createTweet(data){
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            throw {error};
        }
    }

    async get(id){
        try {
            const tweet = await Tweet.findById(id);
            return tweet;
        } catch (error) {
            throw {error};
        }
    }
    async getwithcomment(id){
        try {
            const tweet = await Tweet.findById(id).populate({path : "comment"});
            return tweet;
        } catch (error) {
            throw {error};
        }
    }
}

module.exports = tweetrepository;