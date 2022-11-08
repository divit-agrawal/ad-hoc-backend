const express = require("express");

const app = express();

const PORT = process.env.PORT || 3000;

const bodyParser = require("body-parser");

const mongoose = require("mongoose");

const cors = require("cors");

require("dotenv/config");

app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());
//Import Routes:
const login = require("./login");

const register = require("./register");

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use("/register", register);
app.use("/login", login);

//Routes:
app.get("/", (req, res) => {
  res.json({
    document: "ad hoc backend",
  });
});
//Routes:
app.post("/", (req, res) => {
  console.log(req.body);
  res.json({
    document: "ad hoc backend",
  });
});
//Connect to db:
mongoose.connect(
  process.env.DB_CONNECTION,
  { useNewUrlParser: true, useUnifiedTopology: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to DB!");
  }
);

//Listen on port:
app.listen(PORT);
