import asynchandler from "express-async-handler";
import createError from "http-errors";
import generateToken from "../utils/generateToken.js";
import User from "../models/userModel.js";

// Register User
const registerUser = asynchandler(async (req, res) => {
  const { nameandpassword, dateofbirth, gender } = req.body;
  const { firstname, surname, email, password } = nameandpassword;
  const { day, month, year } = dateofbirth;

  // Check if user with same email already exist in the database
  const userExists = await User.findOne({ email });
  // if the user exists throw error
  if (userExists) {
    throw createError(400, "User already exists");
  }
  // if the user doesnot exist create a new user in the database
  const user = await User.create({
    firstname,
    surname,
    email,
    password,
    dateofbirth: {
      day,
      month,
      year,
    },
    gender,
  });
  if (user) {
    res.status(201).json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      dateofbirth: user.dateofbrith,
      profilePic: user.profilePic,
      gender: user.gender,
      coverPic: user.coverPic,
      friends: user.friends,
      friendRequests: user.friendRequests,
      posts: user.posts,
      token: generateToken(user._id),
    });
  } else {
    throw createError(400, "Invalid User Data");
  }
});

// Login User
const loginUser = asynchandler(async (req, res) => {
  const { emailandpassword } = req.body;
  const { email, password } = emailandpassword;

  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    res.json({
      _id: user._id,
      firstname: user.firstname,
      surname: user.surname,
      email: user.email,
      dateofbirth: user.dateofbrith,
      profilePic: user.profilePic,
      coverPic: user.coverPic,
      friends: user.friends,
      friendRequests: user.friendRequests,
      posts: user.posts,
      token: generateToken(user._id),
    });
  } else {
    throw createError(401, "Invalid Email or Password");
  }
});
const updateProfile = asynchandler(async (req, res) => {
  const { firstname, surname, email, password, profilePic, coverPic } =
    req.body;

  try {
    const user = await User.findById({ _id: req.user._id });
    if (user) {
      if (password) {
        user.password = password;
      }
      user.firstname = firstname || user.firstname;
      user.surname = surname || user.surname;
      user.email = email || user.email;
      user.profilePic = profilePic || user.profilePic;
      user.coverPic = coverPic || user.coverPic;

      const updatedUser = await user.save();
      res.json({
        _id: updatedUser._id,
        firstname: updatedUser.firstname,
        surname: updatedUser.surname,
        email: updatedUser.email,
        dateofbirth: updatedUser.dateofbrith,
        profilePic: updatedUser.profilePic,
        coverPic: updatedUser.coverPic,
        friends: updatedUser.friends,
        friendRequests: updatedUser.friendRequests,
        posts: updatedUser.posts,
        token: generateToken(updatedUser._id),
      });
    } else {
      res.status(401).json({
        message: "User not found, Login!",
      });
    }
  } catch (err) {
    console.log(err);
  }
});

export { registerUser, loginUser, updateProfile };
