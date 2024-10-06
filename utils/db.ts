import mongoose, { ConnectOptions } from "mongoose";

// Define your MongoDB URI
const db_connection_url: string = process.env.MONGODB_URI || "";

// Extend the ConnectOptions interface to add required options (though most are already available in the default ConnectOptions interface)
interface Options extends ConnectOptions {
  useNewUrlParser: boolean;
  useUnifiedTopology: boolean;
  bufferCommands: boolean;
}

// Define the function to connect to the database
async function connectToDatabase(): Promise<void> {
  if (mongoose.connection.readyState >= 1) {
    // If already connected, no need to reconnect
    console.log("Already connected to MongoDB");
    return;
  }

  const options: Options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    bufferCommands: false, // Disable buffering, commands should fail when not connected
  };

  try {
    // Try to connect using the provided options
    await mongoose.connect(db_connection_url, options);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    if (error instanceof Error) {
      throw new Error(`Failed to connect to MongoDB: ${error.message}`);
    }
    throw error;
  }
}

export default connectToDatabase;
