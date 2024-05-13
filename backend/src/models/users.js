import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    image: { type: String },
    email: { type: String, required: true },
    passwordHash: { type: String, required: true, trim: true },
    passwordSalt: { type: String, required: true, trim: true },
    isEmailVerified: { type: Boolean, default: false },
    sixDigitCode: {
      type: String,
      required: true,
    },
  },
  { collection: "users", timestamps: true }
);

export const Users = mongoose.model("Users", userSchema);
