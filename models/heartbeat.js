const mongoose = require("mongoose");

const heartbeatSchema = new mongoose.Schema({
  heartbeat: { type: String, default: 0 },
});

module.exports = mongoose.model("HeartBeats", heartbeatSchema);