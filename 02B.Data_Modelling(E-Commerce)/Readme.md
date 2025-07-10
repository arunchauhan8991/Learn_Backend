# DATA MODELLING FOR E-COMMERCE

# first we will make model for user

```javascript
import mongoose from "mongoose"

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: true,
  }
}, {timestamps: true})

export const User = new mongoose.model("User", userSchema)
```

# then we will make model for category 

```javascript
import mongoose from "mongoose"

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
}, {timestamps: true})

export const Category = new mongoose.model("Category", categorySchema)
```

# product models

```javascript
import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
  description: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  productImage: {
    type: String, //api link of images uploaded on any platform like (Cloudinary or AWS bucket) 
  },
  price: {
    type: Number,
    default: 0
  },
  stock: {
    type: Number,
    default: 0
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Category",
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
}, {timestamps: true})

export const Product = new mongoose.model("Product", productSchema)
```
# order models

```javascript
import mongoose from "mongoose"

//building mini model for orderitems
const orderItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  },
  quantity: {
    type: Number,
    required: true
  }
})

const orderSchema = new mongoose.Schema({
  orderPrice: {
    type: Number,
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  orderItems: {
    type: [orderItemSchema]
  },
  address: {
    type: String,
    required:true
  },
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"], // enum provides choices for status strictly these opyions only
    default: "PENDING"
  }
}, {timestamps: true})

export const Order = new mongoose.model("Order", orderSchema)
```