const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
      type: String,
      //trim: true,
      required: true,
    },
    email: {
      type: String,
      required: true,
      //trim: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
    resetPasswordLink: {
      data: String,
      default: "",
    },
    
  },
  { timestamps: true } //to include createdAt and updatedAt
);
module.exports = mongoose.model("User", userSchema);

