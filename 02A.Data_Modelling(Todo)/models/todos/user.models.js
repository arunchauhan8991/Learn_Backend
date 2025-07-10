import mongoose from "mongoose"


const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    email : {
      type: String,
      required: true,
      unique: true,
      lowercase: true
    },
    password: {
      type: String,
      required: [true, "password is required"],

    }
  },{ timestamps: true }
  )

export const User = mongoose.model("User", userSchema)
//its name will be saved as ==> users <== in mongodb database