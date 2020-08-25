"use strict";

var express = require("express");

var bodyParser = require("body-parser");

var cors = require("cors");

var app = express();
var corsOptions = {
  origin: "http://localhost:8081"
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

var db = require("./app/models");

var Role = db.role;
db.sequelize.sync(); // db.sequelize.sync({force: true}).then(() => {
//   console.log('Drop and Resync Database with { force: true }');
//   initial();
// });
// simple route

app.get("/", function (req, res) {
  res.json({
    message: "Welcome ntk"
  });
}); // routes

require('./app/routes/auth.routes')(app);

require('./app/routes/user.routes')(app);

require("./app/routes/exambank.routes")(app);

require("./app/routes/user.crud")(app); // set port, listen for requests


var PORT = process.env.PORT || 8080;
app.listen(PORT, function () {
  console.log("Server is running on port ".concat(PORT, "."));
});

function initial() {
  Role.create({
    id: 1,
    name: "user"
  });
  Role.create({
    id: 2,
    name: "moderator"
  });
  Role.create({
    id: 3,
    name: "admin"
  });
}