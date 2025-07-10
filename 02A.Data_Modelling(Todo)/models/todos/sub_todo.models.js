import mongoose from "mongoose"

const subTodoSchema = new mongoose.Schema({
  content: {
    type: String,
    reuired: True
  },
  complete: {
    type: Boolean,
    default: false
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

export const SubTodo = new mongoose.model("SubTodo", subTodoSchema)
//its name will be saved as ==> subtodos <== in mongodb database
