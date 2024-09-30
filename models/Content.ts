// models/User.ts
import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

interface IContent extends Document {
  title: string;
  content: string;
  createBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  description: string;
}

const ContentSchema: Schema<IContent> = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      //   required: true,
      trim: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    createBy: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

const Content: Model<IContent> =
  mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);

export default Content;
