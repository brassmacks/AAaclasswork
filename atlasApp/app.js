const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const db = require('./config/keys').mongoURI;
const passport = require('passport');

const users = require("./routes/api/users");
const tweets = require("./routes/api/tweets");
// import mongoose, express, body parser, routes
// invoke express server
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));


// app.get("/", (req, res) => res.send("Heeye World"));
app.use(passport.initialize());
require('./config/passport')(passport);




// set up routes and responses 
app.use("/api/users", users);
app.use("/api/tweets", tweets);


const port = process.env.PORT || 5000
app.listen(port, () => console.log(`Server is running on port ${port}`));


