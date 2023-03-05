import mongoose from "mongoose";

const connectToMongoDB = (url: string) => {
  return mongoose.connect(url);
};

export { connectToMongoDB };
