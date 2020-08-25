const db = require("../models");
const Exam_bank = db.exambanks;
const Op = db.Sequelize.Op;

// Create and Save a new Question
exports.createQuestion = (req, res) => {
    // Validate request
    if (!req.body.title) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
      return;
    }
  
    // Create a Question
    const exambank = {
      title: req.body.title,
      answer: req.body.answer,
      selected: req.body.selected,
      choice1: req.body.choice1,
      choice2: req.body.choice2,
      choice3: req.body.choice3,
      choice4: req.body.choice4,
      marks: req.body.marks,
      published: req.body.published ? req.body.published : false
    };
  
    // Save Question in the database
    Exam_bank.create(exambank)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the Exam_bank."
        });
      });
  };

// Retrieve all Questions from the database.
exports.findAllQuestion = (req, res) => {
    const title = req.query.title;
    var condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  
    Exam_bank.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving exambanks."
        });
      });
};

// Find a single Question with an id
exports.findOneQuestion = (req, res) => {
    const id = req.params.id;

    Exam_bank.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Exam_bank with id=" + id
        });
      });
};

// Update a Exam_bank by the id in the request
exports.updateQuestion = (req, res) => {
    const id = req.params.id;

    Exam_bank.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Question was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Question with id=${id}. Maybe Question was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Exam_bank with id=" + id
        });
      });
};

// Delete a Question with the specified id in the request
exports.deleteQuestion = (req, res) => {
    const id = req.params.id;

    Exam_bank.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Question was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Question with id=${id}. Maybe Question was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Question with id=" + id
        });
      });
};

// Delete all Question from the database.
exports.deleteAllQuestion = (req, res) => {
    Exam_bank.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Question were deleted successfully!` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while removing all Question."
          });
        });
};

// Find all published Tutorials
exports.findAllPublishedQuestion = (req, res) => {
    Exam_bank.findAll({ where: { published: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Question."
      });
    });
};