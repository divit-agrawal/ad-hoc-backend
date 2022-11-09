const HeartBeat = require("./models/heartbeat");

const express = require("express");

const router = express.Router();

router.post("/", async (req, res) => {
  if (!req.body.heartbeat) {
    return res.status(400).send({ message: "Missing required parameters" });
  }

  try {
    // Get user input
    const { heartbeat } = req.body;

    // Validate user input
    // if (!(email && password && first_name && last_name)) {
    //   res.status(400).send("All input is required");
    // }

    // check if user already exist
    // Validate if user exist in our database
    // const oldUser = await User.findOne({ email });

    // if (oldUser) {
    //   return res.status(409).send("User Already Exist. Please Login");
    // }

    //Encrypt user password
    // encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    // const user = await User.create({
    //   first_name,
    //   last_name,
    //   email: email.toLowerCase(), // sanitize: convert email to lowercase
    //   password: encryptedPassword,
    // });

    const heartbeatx = await HeartBeat.create({
      heartbeat: heartbeat,
    });

    // Create token
    // const token = jwt.sign({ user_id: user._id, email }, process.env.TOKEN_KEY);
    // save user token
    // user.token = token;

    // return new user
    res.status(201).json(heartbeatx);
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
