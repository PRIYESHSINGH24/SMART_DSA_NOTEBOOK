import { Schema } from "mongoose";
import mongoose from "mongoose";

const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: false
        },        
        isEmailVerified: {
            type: Boolean,
            default: false
        },
    }
);

const User = mongoose.model("User", userSchema);

export { User };