const mongoose = require("mongoose");

const heartbeatSchema = new mongoose.Schema({
  heartbeat: { type: Number, default: 0 },
});

module.exports = mongoose.model("HeartBeats", heartbeatSchema);