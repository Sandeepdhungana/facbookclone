import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import User from "../models/userModel.js";
import Message from "../models/messagesModel.js";
import Conversation from "../models/conversationModel.js";
import checkConversation from "../utils/checkConversation.js";
import { getNames } from "../utils/getNames.js";

const createConversation = asynchandler(async (req, res) => {
  const { friendId } = req.body;
  let convoExists = await checkConversation(friendId, req.user._id);

  try {
    if (convoExists) {
      convoExists = await Conversation.findById({
        _id: convoExists._id,
      }).populate("convoMembers");
    }
    let extendedConversation;
    if (!convoExists) {
      const newConversation = new Conversation({
        convoMembers: [req.user._id, friendId],
      });
      const conversation = await newConversation.save();
      extendedConversation = await Conversation.findById({
        _id: conversation._id,
      }).populate("convoMembers");
    }

    // store whole info of conversation in convo
    const convo = convoExists || extendedConversation;

    // destructure only conversation members
    let { convoMembers } = convo;

    // get only names, surname, and profile pic of members
    convoMembers = await getNames(convoMembers);
    // respond only second members as first members is I am my self
    res.status(200).json(convoMembers[1]);
  } catch (e) {
    console.log(e);
  }
});
const getConversation = asynchandler(async (req, res) => {
  try {
    let conversations = await Conversation.find({}).populate("convoMembers");
    let convoMembers = conversations.map((convo) => convo.convoMembers);
    convoMembers = await getNames(convoMembers.flat(2));
    const friendsOnly = convoMembers.filter(
      (convo) => JSON.stringify(convo._id) !== JSON.stringify(req.user._id)
    );
    res.status(200).json(friendsOnly);
  } catch (e) {
    console.log(e);
  }
});

export { createConversation, getConversation };
