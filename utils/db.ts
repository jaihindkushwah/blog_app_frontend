import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const db_connection_url = process.env.MONGODB_URI || "";

interface Options extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  bufferCommands: boolean;
}
async function connectToDatabase() {
  const options: Options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false,
  };
  mongoose
    .connect(db_connection_url, options)
    .then(() => {
      console.log("Connected to MongoDB");
    })
    .catch((error) => {
      console.error("MongoDB connection error:", error);
    });
}

export default connectToDatabase;
