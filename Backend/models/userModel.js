import mongoose from "mongoose";
const { ObjectId } = mongoose.Schema.Types;
import bcrypt from "bcryptjs";

// const dateofbirthSchema = mongoose.Schema({
//   day: {
//     type: String,
//   },
//   month: {
//     type: String,
//   },
//   year: {
//     type: String,
//   },
// });

const userSchema = mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  dateofbirth: {
    day: String,
    month: String,
    year: String,
  },
  gender: {
    type: String,
  },
  profilePic: {
    type: String,
  },
  coverPic: {
    type: String,
  },
  password: {
    type: String,
    required: true,
    // select: false,
  },
  friends: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  friendRequests: [
    {
      type: ObjectId,
      ref: "User",
    },
  ],
  posts: [
    {
      type: ObjectId,
      ref: "Post",
    },
  ],
});

userSchema.methods.matchPassword = async function (password) {
  console.log(this.password);
  return await bcrypt.compare(password, this.password);
};
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

const User = mongoose.model("User", userSchema);
export default User;
