const { SlashCommandBuilder } = require("@discordjs/builders");
const { CommandInteraction } = require("discord.js");

module.exports = class Command extends SlashCommandBuilder {
  /**
   * Command execute function
   * @param {CommandInteraction} interaction
   */
  async execute(interaction) {
    throw new Error("Command not implemented!");
  }
}