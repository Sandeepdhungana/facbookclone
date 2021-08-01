import mongoose from "mongoose";
const {
    objectId
} = mongoose.Schema.Types;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    friends: [{
        type: objectId,
        ref: "User",
    }, ],
    friendRequest: [{
        type: objectId,
        ref: "User",
    }, ],
    post: [{
        type: objectId,
        ref: "Post",
    }, ],
    profilePic: {
        type: String,
    }
});

const User = mongoose.model("User", userSchema)
export default User;