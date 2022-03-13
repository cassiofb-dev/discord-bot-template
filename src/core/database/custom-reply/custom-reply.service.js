const CustomReply = require("./custom-repliy");
const customReplyModel = require("./custom-reply.model");

/**
 * Create custom reply
 * @param {CustomReply} customReply
 * @returns {Promise<CustomReply>}
 */
const save = async (customReply) => {
  const guildId = customReply.guildId;
  const trigger = customReply.trigger
  const foundCustomReply = await customReplyModel.findOne({ guildId, trigger });

  if (foundCustomReply) {
    await update(customReply);
    return customReplyModel.findOne({ guildId, trigger });
  };

  return customReplyModel.create(customReply);
}

/**
 * Find one custom reply
 * @param {CustomReply} customReply
 * @returns {Promise<Array<CustomReply>>}
 */
const find = (customReply) => {
  return customReplyModel.find(customReply);
}

/**
 * Update custom reply
 * @param {CustomReply} customReply
 */
const update = async (customReply) => {
  const guildId = customReply.guildId;
  const trigger = customReply.trigger;
  await customReplyModel.updateOne({ guildId, trigger }, customReply);
}

/**
 * Remove custom reply
 * @param {CustomReply} customReply
 */
 const remove = async (customReply) => {
  const guildId = customReply.guildId;
  const trigger = customReply.trigger;
  await customReplyModel.deleteOne({ guildId, trigger });
}

const customReplyService = { save, find, remove };

module.exports = customReplyService;