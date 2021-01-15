const express = require("express"),
  UsersController = require("../controllers/users"),
  authRouter = express.Router();

authRouter
  .post(
    "/create",
    UsersController.addUser
  )
  .post(
    "/authuser",
    UsersController.authuser
  );

module.exports = authRouter;
