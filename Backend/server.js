import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

// importing route
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

// importing middlewares
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();

const server = createServer(app);
const io = new Server(server, {
  cors: true,
  origin: "http://localhost:3000",
});

app.use(function (req, res, next) {
  req.io = io;
  next();
});
app.use(cors());
app.use(express.json());

// connecting to databsee
connectDB();

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("server is up and running");
});

// io.on("connection", (socket) => {
//   console.log("connection established");
// });

app.use(notFound);
app.use(errorHandler);

const PORT = 5000 || process.env.PORT;
server.listen(PORT, () => {
  console.log("server is up and running");
});

export default io;
