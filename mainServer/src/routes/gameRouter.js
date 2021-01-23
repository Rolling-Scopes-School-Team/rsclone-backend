const express = require("express"),
  GameController = require("../controllers/game"),
  gameRouter = express.Router(),
  { authenticationMiddleware } = require("../middlewares/auth");

gameRouter
  .post(
    "/createRoom",
    authenticationMiddleware,
    GameController.createRoom
  )
  .get(
    "/getRooms",
    authenticationMiddleware,
    GameController.getRooms
  );

module.exports = gameRouter;
