const mongoose = require("mongoose");
const CONFIG = require("../../config");

const startDataBaseConnection = () => mongoose.connect(CONFIG.MONGODB.CONNECTION_STRING);

module.exports = startDataBaseConnection;