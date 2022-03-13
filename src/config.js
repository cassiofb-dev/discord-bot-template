const dotenv = require("dotenv");
dotenv.config();

const CONFIG = {
  DISCORD: {
    APP_ID: process.env.DISCORD_APP_ID,
    GUILD_ID: process.env.DISCORD_GUILD_ID,
    BOT_TOKEN: process.env.DISCORD_BOT_TOKEN,
  },
  MONGODB: {
    CONNECTION_STRING: process.env.MONGODB_CONNECTION_STRING,
  },
};

module.exports = CONFIG;