const { CommandInteraction } = require("discord.js");
const Command = require("../core/classes/command.js");
const customReplySystem = require("../core/features/custom-reply-system.js");
const authorizationHandler = require("../core/handlers/authorization.handler.js");

const command = new Command();
command.setName("custom-reply");
command.setDescription("Manage custom replies");

command.addSubcommand(subCommand => {
  subCommand.setName("save");
  subCommand.setDescription("save custom reply");

  subCommand.addStringOption(option => {
    option.setName("trigger");
    option.setDescription("Message that will trigger the response")
    option.setRequired(true);
    return option;
  });

  subCommand.addStringOption(option => {
    option.setName("message");
    option.setDescription("Message that will reply the trigger")
    option.setRequired(true);
    return option;
  });

  return subCommand;
});

command.addSubcommand(subCommand => {
  subCommand.setName("list");
  subCommand.setDescription("list custom replies");
  return subCommand;
});

command.addSubcommand(subCommand => {
  subCommand.setName("remove");
  subCommand.setDescription("remove custom reply");

  subCommand.addStringOption(option => {
    option.setName("trigger");
    option.setDescription("Trigger to remove")
    option.setRequired(true);
    return option;
  });

  return subCommand;
});

/**
 * Custom reply implementation
 * @param {CommandInteraction} interaction
 */
const execute = async (interaction) => {
  const allowExecution = await authorizationHandler.hasRole(interaction, "Custom Reply Manager");

  if (!allowExecution) return;

  await customReplySystem.manageCustomReply(interaction);
};

command.execute = execute;

module.exports = command;