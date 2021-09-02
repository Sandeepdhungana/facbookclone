import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
// import { createServer } from "http";
// import { Server } from "socket.io";

// importing route
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";
import commentRoute from "./routes/commentRoute.js";
import profileRoute from "./routes/profileRoute.js";
import findFriendRoute from "./routes/findFriendRoute.js";
import conversationRoute from "./routes/conversationRoute.js";

// importing middlewares
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

// const server = createServer(app);
// const io = new Server(server, {
//   cors: true,
//   origin: "http://localhost:3000",
// });

app.use(cors());
app.use(express.json());

// connecting to databsee
connectDB();

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);
app.use("/api/comment", commentRoute);
app.use("/api/profile", profileRoute);
app.use("/api/findfriend", findFriendRoute);
app.use("/api/conversation", conversationRoute);

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.use(notFound);
app.use(errorHandler);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server is up and running");
});
