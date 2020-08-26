"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var db = require("../models");

var Exam_bank = db.exambanks;
var Op = db.Sequelize.Op; // Create and Save a new Question

exports.createQuestion = function (req, res) {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content can not be empty!"
    });
    return;
  } // Create a Question


  var exambank = {
    title: req.body.title,
    answer: req.body.answer,
    selected: req.body.selected,
    choice1: req.body.choice1,
    choice2: req.body.choice2,
    choice3: req.body.choice3,
    choice4: req.body.choice4,
    marks: req.body.marks,
    published: req.body.published ? req.body.published : false
  }; // Save Question in the database

  Exam_bank.create(exambank).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the Question."
    });
  });
}; // Retrieve all Questions from the database.


exports.findAllQuestion = function (req, res) {
  var title = req.query.title;
  var condition = title ? {
    title: _defineProperty({}, Op.iLike, "%".concat(title, "%"))
  } : null;
  Exam_bank.findAll({
    where: condition
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Question."
    });
  });
}; // Find a single Question with an id


exports.findOneQuestion = function (req, res) {
  var id = req.params.id;
  Exam_bank.findByPk(id).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error retrieving Exam_bank with id=" + id
    });
  });
}; // Update a Exam_bank by the id in the request


exports.updateQuestion = function (req, res) {
  var id = req.params.id;
  Exam_bank.update(req.body, {
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Question was updated successfully."
      });
    } else {
      res.send({
        message: "Cannot update Question with id=".concat(id, ". Maybe Question was not found or req.body is empty!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Error updating Exam_bank with id=" + id
    });
  });
}; // Delete a Question with the specified id in the request


exports.deleteQuestion = function (req, res) {
  var id = req.params.id;
  Exam_bank.destroy({
    where: {
      id: id
    }
  }).then(function (num) {
    if (num == 1) {
      res.send({
        message: "Question was deleted successfully!"
      });
    } else {
      res.send({
        message: "Cannot delete Question with id=".concat(id, ". Maybe Question was not found!")
      });
    }
  })["catch"](function (err) {
    res.status(500).send({
      message: "Could not delete Question with id=" + id
    });
  });
}; // Delete all Question from the database.


exports.deleteAllQuestion = function (req, res) {
  Exam_bank.destroy({
    where: {},
    truncate: false
  }).then(function (nums) {
    res.send({
      message: "".concat(nums, " Question were deleted successfully!")
    });
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while removing all Question."
    });
  });
}; // Find all published Tutorials


exports.findAllPublishedQuestion = function (req, res) {
  Exam_bank.findAll({
    where: {
      published: true
    }
  }).then(function (data) {
    res.send(data);
  })["catch"](function (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving Question."
    });
  });
};