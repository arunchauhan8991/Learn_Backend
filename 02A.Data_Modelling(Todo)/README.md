# Data modelling for a todo app.

# user model
```javascript
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
```
# todo model
```javascript
import mongoose from "mongoose"

const todoSchema = new mongoose.Schema({
  content : {
    type: String,
    required: true,
  },
  complete: {
    type: Boolean,
    default: false,
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  subTodos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SubTodo"
    }
  ]//Array of subTodos..
}, { timestamps: true })


export const Todo = mongoose.model("Todo", todoSchema)
//its name will be saved as ==> todos <== in mongodb database.
```
# subtodo model
```javascript
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

```