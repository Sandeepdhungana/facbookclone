import express from "express";
import asynchandler from "express-async-handler";
import createError from "http-errors";
import Conversation from "../models/conversationModel.js";
import randomName from "./RandomName.js";

const checkConversation = asynchandler(async (friendsId, myId) => {
  try {
    const allConversations = await Conversation.find({});

    for (let i = 0; i < allConversations.length; i++) {
      const conversation = allConversations[i];
      const { convoMembers } = conversation;
      if (convoMembers.includes(friendsId) && convoMembers.includes(myId)) {
        return conversation;
      }
    }
  } catch (err) {
    console.log(err);
  }
});

export default checkConversation;
