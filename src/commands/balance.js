const { CommandInteraction } = require("discord.js");
const Command = require("../core/classes/command.js");
const currencySystem = require("../core/features/currency-system.js");

const command = new Command();
command.setName("balance");
command.setDescription("View your currency balance");

/**
 * Balance implementation
 * @param {CommandInteraction} interaction
 */
const execute = async (interaction) => {
  await currencySystem.showBalance(interaction);
};

command.execute = execute;

module.exports = command;