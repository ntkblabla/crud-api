const db = require("../models");
const Result = db.result;
const Op = db.Sequelize.Op;

// Create and Save a new Result
exports.createResult = (req, res) => {
  
    // Create a Result
    const result = {
      marks: req.body.marks,
      username: req.body.username
    };
  
    // Save Result in the database
    Result.create(result)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Result."
        });
      });
  };

// Retrieve all Questions from the database.
exports.findAllResult = (req, res) => {
    const marks = req.query.marks;
    var condition = marks ? { marks: { [Op.iLike]: `%${title}%` } } : null;
  
    Result.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving Result."
        });
      });
};
