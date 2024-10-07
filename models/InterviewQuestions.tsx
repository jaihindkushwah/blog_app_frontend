import mongoose, { Model } from "mongoose";
import { Document, Schema } from "mongoose";
import { ObjectId } from "mongoose";

interface IInterviewQuestion extends Document {
  title: string;
  titleId: string;
  content: string;
  createBy: ObjectId;
  createdAt: Date;
  updatedAt: Date;
  category: string;
  description: string;
}

const InterviewQuestionSchema: Schema<IInterviewQuestion> = new Schema(
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
  },
  {
    timestamps: true,
  }
);

const InterviewQuestion: Model<IInterviewQuestion> =
  mongoose.models.InterviewQuestion ||
  mongoose.model<IInterviewQuestion>(
    "InterviewQuestion",
    InterviewQuestionSchema
  );

export default InterviewQuestion;
