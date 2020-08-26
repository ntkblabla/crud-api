module.exports = app => {
    const exambanks = require("../controllers/exambank.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", exambanks.createQuestion);
  
    // Retrieve all Tutorials
    router.get("/", exambanks.findAllQuestion);
  
    // Retrieve all published Tutorials
    router.get("/published", exambanks.findAllPublishedQuestion);
  
    // Retrieve a single Tutorial with id
    router.get("/:id", exambanks.findOneQuestion);
  
    // Update a Tutorial with id
    router.put("/:id", exambanks.updateQuestion);
  
    // Delete a Tutorial with id
    router.delete("/:id", exambanks.deleteQuestion);
  
    // Create a new Tutorial
    router.delete("/", exambanks.deleteAllQuestion);
  
    app.use('/api/exambanks', router);
  };