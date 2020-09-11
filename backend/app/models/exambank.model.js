module.exports = (sequelize, Sequelize) => {
    const Exam_bank = sequelize.define("exambank", {
      title: {
        type: Sequelize.STRING
      },
      choices:{
        type: Sequelize.ARRAY(Sequelize.STRING)
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
    });
  
    return Exam_bank;
    
  };