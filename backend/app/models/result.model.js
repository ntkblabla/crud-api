module.exports = (sequelize, Sequelize) => {
    const Result = sequelize.define("result", {
      marks: {
        type: Sequelize.STRING
      },
      username: {
        type: Sequelize.STRING
      },

       
    });
  
    return Result;
    
  };