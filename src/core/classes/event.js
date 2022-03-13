module.exports = class Event {
  /**
   *
   * @param {{name: String, once: Boolean}} options
   */
  constructor(options) {
    this.name = options.name;
    this.once = options.once;
  }

  /**
   * Event function
   * @param {any} args
   */
  async execute(args) {
    throw new Error("Not implemented");
  }
}