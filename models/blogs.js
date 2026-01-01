import mongoose, { Schema, Document, Model } from "mongoose";


const BlogsSchema = new Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  content: { type: String, required: true },
  category: { type: String, required: true },
  tags: { type: [String], default: [] },
  thumbnail: { type: String, required: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Blogs = mongoose.models.Blogs || mongoose.model("Blogs", BlogsSchema);
export default Blogs;