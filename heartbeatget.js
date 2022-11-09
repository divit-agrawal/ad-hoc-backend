const User = require("./models/heartbeat");

const express = require("express");

const router = express.Router();
const { ObjectId } = require("mongodb");
// const bcrypt = require("bcryptjs");

// const jwt = require("jsonwebtoken");

router.get("/", async (req, res) => {
    User.findById({_id: "636b5b2bfc732489f82e9d44"}, function (err, user){
        try {
            res.send({"heartbeat": user.heartbeat});         
        } catch (error) {
            console.log("errror getting results")
            console.log(error)
        } 
    })

});

module.exports = router;
