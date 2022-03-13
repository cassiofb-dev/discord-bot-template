const { CommandInteraction } = require("discord.js");
const Command = require("../core/classes/command.js");
const currencySystem = require("../core/features/currency-system.js");

const command = new Command();
command.setName("transfer");
command.setDescription("Transfer currency from your balance to another");

command.addNumberOption(option => {
  option.setName("amount");
  option.setDescription("The currency amount to transfer");
  option.setRequired(true);
  return option;
});

command.addUserOption(option => {
  option.setName("target");
  option.setDescription("The user that will receive from transfer");
  option.setRequired(true);
  return option;
});

/**
 * Transfer implementation
 * @param {CommandInteraction} interaction
 */
const execute = async (interaction) => {
  await currencySystem.transfer(interaction);
};

command.execute = execute;

module.exports = command;