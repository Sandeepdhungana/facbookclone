import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cors from "cors";

// importing route
import userRoute from "./routes/userRoute.js";
import postRoute from "./routes/postRoute.js";

// importing middlewares
import { errorHandler, notFound } from "./middlewares/errorMiddleware.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

// connecting to databsee
connectDB();

app.use("/api/user", userRoute);
app.use("/api/post", postRoute);

app.get("/", (req, res) => {
  res.send("server is up and running");
});

app.use(notFound);
app.use(errorHandler);

const PORT = 5000 || process.env.PORT;
app.listen(PORT, () => {
  console.log("server is up and running");
});
