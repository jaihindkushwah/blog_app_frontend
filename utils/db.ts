import mongoose from "mongoose";
import { ConnectOptions } from "mongoose";

const db_connection_url =
  process.env.MONGODB_URI || "mongodb://localhost:27017/quiz";

interface Options extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  bufferCommands: boolean;
}
async function dbConnect() {
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

export default dbConnect;
