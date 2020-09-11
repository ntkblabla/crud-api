module.exports = app => {
    const results = require("../controllers/result.controller.js");
  
    var router = require("express").Router();

 // Create a new Tutorial
 router.post("/", results.createResult);
  
 // Retrieve all Tutorials
 router.get("/", results.findAllResult);

 
app.use('/api/results', router);

};