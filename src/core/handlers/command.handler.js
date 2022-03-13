const { Collection, CommandInteraction } = require("discord.js");
const { readdirSync } = require("node:fs");
const Command = require("../classes/command");

module.exports = class CommandHandler {
  constructor() {
    this.commands = this.getCommands();
  }

  /**
   * Import command file with path "```src/commands/*js```" as command
   * @param {string} file
   * @returns {Command}
   */
  importCommand(file) {
    const command = require(`../../commands/${file}`);
    return command;
  }

  /**
   * Get commands with path "```src/commands/*js```" as discord.js collection
   * @returns {Collection<String, Command>}
   */
  getCommands() {
    const commandFiles = readdirSync("src/commands").filter(file => file.endsWith(".js"));
    const commands = new Collection();

    for (const file of commandFiles) {
      const command = this.importCommand(file);
      commands.set(command.name, command);
    }

    return commands;
  }

  /**
   * Handle command executions
   * @param {String} commandName
   * @param {CommandInteraction} interaction
   * @returns
   */
  async execute(interaction) {
    const commandName = interaction.commandName;
    const command = this.commands.get(commandName);

    if (!command) return interaction.reply({
      content: `There is no command named: ${commandName}`,
      ephemeral: true,
    });

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: `There was an error running command named: ${commandName}`,
        ephemeral: true,
      });
    }
  }
}