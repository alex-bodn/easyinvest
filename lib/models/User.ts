import mongoose, { Schema, models, model } from "mongoose";

const UserSchema = new Schema({
    email: { type: String, required: true, unique: true },
  
    password: { type: String, required: true },
  
    createdAt: { type: Date, default: Date.now },
  
    lastLogin: { type: Date, default: null },
  
    isVerified: { type: Boolean, default: false },
  
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
  
    avatarUrl: { type: String, default: '' }
  
  }, { timestamps: true });
  

export const User = models.User || model("User", UserSchema);