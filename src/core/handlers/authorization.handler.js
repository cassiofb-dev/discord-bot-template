const { CommandInteraction } = require("discord.js");

/**
 * Handle permissions
 * @param {CommandInteraction} interaction
 */
const hasPermission = async (interaction, permission) => {
  if (interaction.member.permissions.has(permission)) return true;

  await interaction.reply({
    content: "You do not have permission to run this command!",
    ephemeral: true,
  });

  return false;
}

/**
 * Handle roles
 * @param {CommandInteraction} interaction
 * @param {String} roleName
 */
const hasRole = async (interaction, roleName) => {
  const roleNames = interaction.member.roles.cache.map(role => role.name);

  if (roleNames.includes(roleName)) return true;

  await interaction.reply({
    content: `Only ${roleName} can use this command!`,
    ephemeral: true,
  });

  return false;
}

const authorizationHandler = { hasPermission, hasRole };

module.exports = authorizationHandler;