const DiscordBot = require("./core/classes/discord-bot");
const { Intents } = require("discord.js");

const discordBot = new DiscordBot({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES,
]});

discordBot.start();