import { sequelize } from './sequelize.js';

export const setUpConnection = () => sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully(sql).');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:(sql)', err);
  })
  .then(
    sequelize.sync().then(() => {
      console.log('Sequelize was sync');
    }),
  );

export default { setUpConnection };
