const UserModel = require("../models/user");
const RoomModel = require("../models/room");
  
class Models {
  Room = RoomModel;
  User = UserModel;
}
module.exports = new Models();
  