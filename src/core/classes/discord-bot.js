const { REST } = require("@discordjs/rest");
const { Routes } = require("discord-api-types/v9");
const { Client, ClientOptions, CommandInteraction } = require("discord.js");
const startDataBaseConnection = require("../database/database");
const CommandHandler = require("../handlers/command.handler");
const EventHandler = require("../handlers/event.handler");
const CONFIG = require("../../config");

module.exports = class DiscordBot extends Client {
  /**
   * Wrapper to discord.js default client constructor
   * @param {ClientOptions} options
   */
  constructor(options) {
    super(options);
    this.commandHandler = new CommandHandler();
    this.eventHandler = new EventHandler(this);
  }

  /**
   * Wrapper to ``this.commandHandler.execute``
   * @param {CommandInteraction} interaction
   * @return {Promise}
   */
  execute(interaction) {
    this.commandHandler.execute(interaction);
  }

  /**
   * Publish slash commands
   */
  async publishCommands() {
    const rest = new REST({ version: "9" }).setToken(CONFIG.DISCORD.BOT_TOKEN);
    const route = Routes.applicationGuildCommands(
      CONFIG.DISCORD.APP_ID,
      CONFIG.DISCORD.GUILD_ID,
    );

    const commandsData = this.commandHandler.commands.toJSON();

    await rest.put(route, { body: commandsData });
  }

  /**
   * Wrapper to publishCommands, start database and login
   */
  start() {
    console.time("Bot started in");
    console.log("Publishing commands...");
    this.publishCommands().then(() => {
      console.log("Commands published, starting database connection...");
      startDataBaseConnection().then(() => {
        console.log("Started database connection, starting bot...");
        this.login(CONFIG.DISCORD.BOT_TOKEN).then(() => {
          console.timeEnd("Bot started in");
        });
      });
    });
  }
}