import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";
import createError from "http-errors";
import User from "../models/userModel.js";

const authorizationMiddleware = asyncHandler(async (req, res, next) => {
  const { authorization } = req.headers;
  let token;
  if (authorization && authorization.startsWith("Bearer")) {
    try {
      token = authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      req.user = await User.findById(decoded.id).select("-password");
      // console.log("I am loggin from auuthmiddleware", req.user);
      next();
    } catch (err) {
      throw createError(401, "Not Authorized, token failed");
    }
  } else {
    throw createError(401, "Not Authorized, invalid token");
  }
});

// const authorizationMiddleware = asyncHandler(async (req, res, next) => {
//     let token;
//     if (
//       req.headers.authorization &&
//       req.headers.authorization.startsWith("Bearer")
//     ) {
//       try {
//         token = req.headers.authorization.split(" ")[1];

//         const decoded = jwt.verify(token, process.env.JWT_SECRET);

//         req.user = await User.findById(decoded.id).select("-password");
//         console.log(req.user);

//         next();
//       } catch (error) {
//         console.error(error);
//         throw createError(401, "Not authorized, token failed");
//       }
//     } else {
//       throw createError(401, "Not authorized, no token");
//     }
//   });

export default authorizationMiddleware;
