// models/User.ts
import mongoose, { Document, Model, ObjectId, Schema } from "mongoose";

enum EStatus {
  published = "published",
  draft = "draft",
  deleted = "failed",
}

interface IContent extends Document {
  title: string;
  titleId: string;
  content: string;
  createBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  description: string;
  view_count: number;
  author: string;
  status: EStatus;
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
    titleId: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    content: {
      type: String,
      required: true,
      trim: true,
    },
    category: {
      type: String,
      required: true,
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
    view_count: {
      type: Number,
      default: 0,
    },
    author: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: Object.values(EStatus),
      default: EStatus.published,
    },
  },
  {
    timestamps: true,
  }
);

const Content: Model<IContent> =
  mongoose.models.Content || mongoose.model<IContent>("Content", ContentSchema);

export default Content;
