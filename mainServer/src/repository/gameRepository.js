const cryptoJs = require("crypto-js"),
  models = require("../init/models"),
  CustomError = require("../helpers/customError");

class GameRepository {
  createRoom = async ({ data, user }) => {
    try {
      const JSONUser = JSON.stringify({id: user.id, name: user.name});

      const room = await models.Room.create({
        size: data.size,
        name: data.name,
        password: data.password,
        fullness: 1,
        users: `${JSONUser}`,
      });

      if (!room)
        throw new CustomError("createUserError", 409, "User not created");

      return room;
    } catch (e) {
      if (e instanceof CustomError) throw e;

      throw new CustomError("undefined error", 400, "Something wrong");
    }
  };

   getRooms = async () => {
    try {
    

      const rooms = await models.Room.findAll({
         attributes: [
          "name",
          "size",
          "fullness",
          "users"
        ],
      });

      

      if (!rooms)
        throw new CustomError("getRoomsError", 409, "rooms is not available");

      return rooms;
    } catch (e) {
      if (e instanceof CustomError) throw e;

      throw new CustomError("undefined error", 400, "Something wrong");
    }
  };
}

module.exports = new GameRepository();
