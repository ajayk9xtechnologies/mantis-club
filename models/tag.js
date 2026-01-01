import mongoose, { Schema } from "mongoose";

const TagSchema = new Schema({
    name: { type: String, required: true, unique: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

const Tag = mongoose.models.Tag || mongoose.model("Tag", TagSchema);

export default Tag;
