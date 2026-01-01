import mongoose, { Schema, Document, Model } from "mongoose";

const UserSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  email: { type: String, required: true, unique: true, index: true },
  password: { type: String, required: true },
  username: { type: String, index: true },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.models.Users || mongoose.model("Users", UserSchema);

export default User;
