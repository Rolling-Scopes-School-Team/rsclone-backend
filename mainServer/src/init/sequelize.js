import Sequelize from 'sequelize';
import config from '../../config.js';

export const sequelize = new Sequelize(
  config.dbNameSQL,

  config.usernameSQL,

  config.passwordSQL,

  {
    host: config.hostSQL,

    dialect: 'mysql',
  },
);

export default { sequelize };
