const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();
const path = require('path');

const app = express();

app.use(cors());
app.use(bodyParser.json());

const UserRouter = require("./routes/user");
const StudentRouter = require("./routes/student");

app.use("/api/v1/students", StudentRouter);
app.use("/api/v1/users", UserRouter);

app.use(express.static(path.join(__dirname, '..', 'build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

module.exports = app;
