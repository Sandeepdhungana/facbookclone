import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      useCreateIndex: true,
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useFindAndModify: false,
    });
    console.log("Database connection is done succesfully");
  } catch (error) {
    console.log("Database connection error: " + error);
    process.exit(1);
  }
};

export default connectDB;
