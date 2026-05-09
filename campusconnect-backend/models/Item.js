const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  title: String,
  category: String,
  type: { type: String, enum: ["lost", "found"] },
  description: String,
  location: String,
  imageUrl: String,
  status: { type: String, default: "pending" },
  userId: String
}, { timestamps: true });

module.exports = mongoose.model("Item", itemSchema);