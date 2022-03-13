const { CommandInteraction } = require("discord.js");
const Command = require("../core/classes/command.js");

const command = new Command();
command.setName("ping");
command.setDescription("Replies with ping value");

/**
 * Ping implementation
 * @param {CommandInteraction} interaction
 */
const execute = async (interaction) => {
  const latency = interaction.createdAt.getTime() - Date.now();
  await interaction.reply(`Ping: ${latency}ms.`);
};

command.execute = execute;

module.exports = command;