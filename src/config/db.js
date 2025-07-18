import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      connectTimeoutMS: 5000, 
    });
    console.log("MongoDB connected...");
  } catch (err) {
    console.error("DB connection failed:", err.message);
    process.exit(1); 
  }
};

export { connectDB };