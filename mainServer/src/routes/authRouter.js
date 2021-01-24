import express from 'express';

import UsersController from '../controllers/users.js';

const authRouter = express.Router();

authRouter
  .post(
    '/create',
    UsersController.addUser,
  )
  .post(
    '/authuser',
    UsersController.authuser,
  )
  .get(
    '/autologin',
    UsersController.autoLogin,
  );

export default authRouter;
