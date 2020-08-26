module.exports = app => {
    const users = require("../controllers/auth.controller.js");
  
    var router = require("express").Router();

// Retrieve all Users
router.get("/", users.findAllUser);

router.get("/:id", users.findOneUser);

router.put("/:id", users.updateUser);

app.use('/api/users', router);

};