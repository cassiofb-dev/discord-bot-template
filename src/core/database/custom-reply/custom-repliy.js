module.exports = class CustomReply {
  /**
   *
   * @param {{
   *  guildId: String,
   *  trigger: String,
   *  message: String,
   *  createdAt: Date,
   * }} options
   */
  constructor(options) {
    this.guildId = options.guildId;
    this.trigger = options.trigger;
    this.message = options.message;
    this.createdAt = options.createdAt;
  }
}