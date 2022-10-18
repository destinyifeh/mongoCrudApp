const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Todo", todoSchema);
