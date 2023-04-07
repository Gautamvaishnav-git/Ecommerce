import mongoose from "mongoose";

const connectToMongoDB = () => {
  return mongoose.connect(process.env.MONGO_URI);
};

export { connectToMongoDB };
