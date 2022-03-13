const guildUserModel = require("./guild-user.model");
const GuildUser = require("./guild-user");

/**
 * Returns GuildUser Creating if not Exist
 * @param {String} guildId
 * @param {String} userId
 * @returns {Promise<GuildUser>}
 */
const createIfNotExist = async (guildId, userId) => {
  const guildUser = await guildUserModel.findOne({ guildId, userId });

  if (guildUser) return guildUser;

  return guildUserModel.create({ guildId, userId });
}

/**
 * Update GuildUser
 * @param {GuildUser} guildUser
 */
const update = async (guildUser) => {
  await guildUserModel.updateOne({
    guildId: guildUser.guildId,
    userId: guildUser.userId,
  }, guildUser);
}

/**
 * Find one guild user
 * @param {GuildUser} guildUser
 * @returns {Promise<Array<GuildUser>>}
 */
 const find = (guildUser) => {
  return guildUserModel.find(guildUser);
}

const guildUserService = { createIfNotExist, update, find };

module.exports = guildUserService;