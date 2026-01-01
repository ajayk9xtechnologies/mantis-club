import mongoose from "mongoose";

let isConnected = false; 

const connectToDatabase = async () => {
  if (isConnected) {
    // Already connected — skip re-connecting
    // console.log("✅ MongoDB already connected");
    return;
  }

  if (!process.env.MONGODB_URI) {
    throw new Error("❌ MONGODB_URI is not defined in environment variables");
  }

  try {
    // Connect only once per runtime
    await mongoose.connect(process.env.MONGODB_URI, {
      bufferCommands: false,
      maxPoolSize: 10,
    });

    isConnected = true;
    console.log("✅ MongoDB Connected Successfully");
  } catch (error) {
    console.error("❌ MongoDB Connection Failed:", error.message);
    throw new Error("Database connection failed");
  }
};

export default connectToDatabase;
