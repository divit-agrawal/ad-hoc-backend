const HeartBeat = require("./models/heartbeat");

const express = require("express");
const { ObjectId } = require("mongodb");

const router = express.Router();

router.get("/:heartbeat", async (req, res) => {
  
  try {
    // Get user input
    const heartbeat = req.params.heartbeat;
    const update = await HeartBeat.updateOne({_id:new ObjectId("636b5b2bfc732489f82e9d44")},{$set:{heartbeat:heartbeat}})
    if(!update.acknowledged){
      return res.json({success: false, message:"Error updating heartbeat"})
    }
    res.status(201).json({success: true, message:"Heartbeat updated successfully", heartbeat});
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
