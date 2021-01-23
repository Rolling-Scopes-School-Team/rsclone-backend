import Sequelize from 'sequelize';
import { sequelize } from '../init/sequelize.js';

export const UserModel = sequelize.define('user', {
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

export default UserModel;
