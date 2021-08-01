import mongoose from 'mongoose';
const {
    objectId
} = mongoose.Schema.Types

const likeSchema = new mongoose.Schema({
    likedBy: {
        type: objectId,
        ref: "User"
    },
    reaction: String,
})

const postSchema = new mongoose.Schema({
    caption: {
        type: String
    },
    picUrl: {
        type: String
    },
    comments: [{
        type: String,
        commentedBy: {
            type: objectId,
            ref: "User"
        }
    }],
    postedBy: {
        type: objectId,
        ref: "User"
    },
    postedIn: {
        type: Date,
        default: Date.now
    },
    likes: [likeSchema]
})