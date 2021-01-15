const sequelize = require("../init/sequelize"),
  Sequelize = require("sequelize");

const UserModel = sequelize.define("user", {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  

  email: {
    type: Sequelize.STRING,
    allowNull: false,
    Unique: true,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}); 

module.exports = UserModel;
