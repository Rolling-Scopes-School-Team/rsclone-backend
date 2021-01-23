import gameRep from '../repository/gameRepository.js';

class GameController {
  createRoom = (req, res, next) => {
    gameRep.createRoom({ data: req.body, user: req.user })
      .then((room) => res.send({ room }))
      .catch((err) => next(err));
  };

  getRooms = (req, res, next) => {
    gameRep.getRooms()
      .then((rooms) => res.send({ rooms }))
      .catch((err) => next(err));
  };
}

export default new GameController();
