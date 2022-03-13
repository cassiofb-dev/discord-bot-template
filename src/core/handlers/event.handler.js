const { readdirSync } = require("node:fs");
const DiscordBot = require("../classes/discord-bot");
const Event = require("../classes/event");

module.exports = class EventHandler {
  /**
   *
   * @param {DiscordBot} discordBot
   */
  constructor(discordBot) {
    this.events = this.init(discordBot);
  }

  /**
   * Import event file with path "```src/events/*js```" as event
   * @param {string} file
   * @returns {Event}
   */
  importEvent(file) {
    const event = require(`../../events/${file}`);
    return event;
  }

  /**
   * Start event handler
   * @param {DiscordBot} discordBot
   * @returns {Array<Event>}
   */
  init(discordBot) {
    const eventFiles = readdirSync("src/events").filter(file => file.endsWith(".js"));
    const events = [];

    for (const file of eventFiles) {
      const event = this.importEvent(file);
      events.push(event);
      this.execute(discordBot, event);
    }

    return events;
  }

  /**
   * Handle event executions
   * @param {DiscordBot} discordBot
   * @param {Event} event
   */
  execute(discordBot, event) {
    try {
      if (event.once) {
        discordBot.once(event.name, (...args) => event.execute(...args));
      } else {
        discordBot.on(event.name, (...args) => event.execute(...args));
      }
    } catch (error) {
      console.error(error);
    }
  }
}