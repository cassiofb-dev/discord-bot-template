const mongoose = require("mongoose");

const CustomReplySchema = new mongoose.Schema({
  guildId: String,
  trigger: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("CustomReply", CustomReplySchema);