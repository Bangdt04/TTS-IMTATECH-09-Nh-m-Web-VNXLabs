import mongoose, { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      minlength: 3,
      maxlength: 30,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    follow: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: [],
    }],
    count_follow: {
      type: Number,
      default: 0,
    },

    avatar: {
      type: String,
      default: "https://res.cloudinary.com/dzurnefms/image/upload/v1720926823/project_cn/zyys4rs4omlfcs1u7nww.png",
    },
    isBlocked: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);

export default mongoose.model("User", userSchema);
