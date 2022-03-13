const mongoose = require("mongoose");

const guildUserSchema = new mongoose.Schema({
  guildId: String,
  userId: String,
  currency: {
    type: Number,
    default: 10,
  },
  experience: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("GuildUser", guildUserSchema);