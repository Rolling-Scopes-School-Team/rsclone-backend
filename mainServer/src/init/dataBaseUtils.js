const sequelize = require("./sequelize");

const setUpConnection = () => {
  return sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully(sql).");
    })
    .catch(err => {
      console.error("Unable to connect to the database:(sql)", err);
    })
    .then(
      sequelize.sync().then(result => {
        console.log("Sequelize was sync");
      })
    );
};

module.exports = { setUpConnection };
