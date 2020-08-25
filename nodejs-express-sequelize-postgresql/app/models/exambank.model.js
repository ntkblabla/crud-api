module.exports = (sequelize, Sequelize) => {
    const Exam_bank = sequelize.define("exambank", {
      title: {
        type: Sequelize.STRING
      },
      choice1: {
        type: Sequelize.STRING
      },
      choice2: {
        type: Sequelize.STRING
      },
      choice3: {
        type: Sequelize.STRING
      },
      choice4: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      },
      marks: {
        type: Sequelize.STRING
      },
      selected: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
  
    return Exam_bank;
    
  };