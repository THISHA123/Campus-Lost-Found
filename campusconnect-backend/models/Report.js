const mongoose = require("mongoose");

const claimSchema = new mongoose.Schema({
  itemId: String,
  claimantUserId: String,
  message: String,
  status: { type: String, default: "pending" }
}, { timestamps: true });

module.exports = mongoose.model("Claim", claimSchema);