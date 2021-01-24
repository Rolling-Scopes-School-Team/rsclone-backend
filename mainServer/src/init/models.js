import { UserModel } from '../models/user.js';
import { RoomModel } from '../models/room.js';

class Models {
  Room = RoomModel;

  User = UserModel;
}
export default new Models();
