import { Document, model, Model, Schema } from "mongoose";

interface IBookCollectionDocument extends Document {
  title: string;
  authors: string[];
  publication_year: number;
  average_rating: number;
  ratings_count: number;
  image_url: string;
}
const BookCollectionSchema: Schema<IBookCollectionDocument> = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  authors: {
    type: [String],
    required: true,
  },
  publication_year: {
    type: Number,
    required: true,
  },
  average_rating: {
    type: Number,
    required: true,
  },
  ratings_count: {
    type: Number,
    required: true,
  },
  image_url: {
    type: String,
    required: true,
  },
});

const BookCollection: Model<IBookCollectionDocument> =
  model<IBookCollectionDocument>("BookCollection", BookCollectionSchema);

export default BookCollection;
