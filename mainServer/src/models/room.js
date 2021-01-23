import Sequelize from 'sequelize';
import { sequelize } from '../init/sequelize.js';

export const RoomModel = sequelize.define('room', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
  },

  size: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  fullness: {
    type: Sequelize.INTEGER,
    allowNull: true,
  },

  users: {
    type: Sequelize.STRING,
    allowNull: true,
  },

  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
});

export default RoomModel;
