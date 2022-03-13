const { Interaction } = require("discord.js");
const Event = require("../core/classes/event");

const event = new Event({
  name: "interactionCreate",
  once: false,
});

/**
 * interactionCreate implementation
 * @param {Interaction} interaction
 */
const execute = async (interaction) => {
  if (interaction.isCommand()) interaction.client.execute(interaction);
}

event.execute = execute;

module.exports = event;