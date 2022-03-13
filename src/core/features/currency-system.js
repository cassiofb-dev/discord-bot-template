const { CommandInteraction } = require("discord.js");
const guildUserService = require("../database/guild-user/guild-user.service");

/**
 * Handle transfers
 * @param {CommandInteraction} interaction
 */
const transfer = async (interaction) => {
  const guildId = interaction.guildId;
  const targetGuildUserId = interaction.options.getUser("target").id;
  const amount = interaction.options.getNumber("amount");

  const [targetGuildUser] = await guildUserService.find({ guildId, userId: targetGuildUserId });

  if (!targetGuildUser) return interaction.reply({
    content: "Target not in database!",
    ephemeral: true,
  });

  const userId = interaction.user.id;
  const guildUser = await guildUserService.createIfNotExist(guildId, userId);

  if (guildUser.currency < amount) return interaction.reply({
    content: `Transfer blocked! Your balance (${guildUser.currency}) is less than amount (${amount})`,
    ephemeral: true,
  });

  guildUser.currency -= amount;
  targetGuildUser.currency += amount;

  await guildUserService.update(guildUser);
  await guildUserService.update(targetGuildUser);

  await interaction.reply({
    content: "Transfer successful!",
    ephemeral: true,
  });
}

/**
 * Show balance
 * @param {CommandInteraction} interaction
 */
const showBalance = async (interaction) => {
  const guildId = interaction.guildId;
  const userId = interaction.user.id;
  const guildUser = await guildUserService.createIfNotExist(guildId, userId);
  await interaction.reply({
    content: `Your balance is ${guildUser.currency}`,
    ephemeral: true,
  });
}

const currencySystem = { showBalance, transfer };

module.exports = currencySystem;