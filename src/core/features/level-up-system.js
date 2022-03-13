const { Message } = require("discord.js");
const guildUserService = require("../database/guild-user/guild-user.service");

/**
 * Level Up System Manager
 * @param {Message} message
 */
const handleLevel = async (message) => {
  const guildId = message.guildId;
  const userId = message.author.id;
  const guildUser = await guildUserService.createIfNotExist(guildId, userId);

  const guildUserOldLevel = Math.floor(Math.log2(guildUser.experience));
  const guildUserNewLevel = Math.floor(Math.log2(guildUser.experience + 1));

  if (guildUserNewLevel > 0 && guildUserNewLevel > guildUserOldLevel) {
    message.reply({
      content: `Level UP! Your new Level is ${guildUserNewLevel}`,
    });

    guildUser.currency += guildUserNewLevel;
  }

  guildUser.experience++;
  await guildUserService.update(guildUser);
}

const levelUpSystem = { handleLevel };

module.exports = levelUpSystem;