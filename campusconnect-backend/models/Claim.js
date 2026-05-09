const mongoose = require('mongoose');

const claimSchema = new mongoose.Schema({
  itemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Item',
    required: true
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  message: {
    type: String
  },
  status: {
    type: String,
    default: 'pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Claim', claimSchema);