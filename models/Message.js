const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  room: {
    type: String,
    required: true,
    default: 'general'
  },
  username: {
    type: String,
    required: true
  },
  message: {
    type: String,
    required: true
  },
  color: {
    type: String
  },
  timestamp: {
    type: String
  }
}, { timestamps: true });

module.exports = mongoose.model('Message', messageSchema);
