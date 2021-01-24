import express from 'express';
import GameController from '../controllers/game.js';
import { authenticationMiddleware } from '../middlewares/auth.js';

const gameRouter = express.Router();

gameRouter
  .post(
    '/createRoom',
    authenticationMiddleware,
    GameController.createRoom,
  )
  .get(
    '/getRooms',
    authenticationMiddleware,
    GameController.getRooms,
  );

export default gameRouter;
