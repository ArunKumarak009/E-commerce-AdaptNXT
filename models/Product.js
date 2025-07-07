
const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true
    },
    description: {
      type: String,
      required: [true, "Description is required"]
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"]
    },
    category: {
      type: String,
      required: [true, "Category is required"]
    }
  },
  {
    timestamps: true // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("Product", productSchema);
