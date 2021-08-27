import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";
import randomName from "./RandomName.js";

const generateRandomUser = asynchandler(async (i) => {
  try {
    const firstname = `sandeep${i}`;
    const surname = `dhungana${i}`;
    const email = `sandeepdhungana${i}@gmail.com`;
    const dateofbirth = {
      day: "20",
      month: "Jan",
      year: "1999",
    };
    const password = "123456789";
    // console.log(firstname)
    const user = await User.create({
      firstname,
      surname,
      email,
      dateofbirth,
      password,
    });

    // const me = await User.findOne({ _id: "61196022df152b13389716ad" });
    // me.friends.push(user);
    // me.save();

    // user.save();
  } catch (err) {
    console.log(err);
  }
});

export default generateRandomUser;
