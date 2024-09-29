// models/User.ts
import mongoose, { Document, Model, Schema } from "mongoose";

enum ERoleType {
  User = "user",
  Creator = "creator",
}

interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: ERoleType;
}

const UserSchema: Schema<IUser> = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: Object.values(ERoleType),
      default: ERoleType.User,
    },
  },
  {
    timestamps: true,
  }
);

const User: Model<IUser> =
  mongoose.models.User || mongoose.model<IUser>("User", UserSchema);

export default User;
