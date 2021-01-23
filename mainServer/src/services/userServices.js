import cryptoJs from 'crypto-js';

import UserRep from '../repository/userRepository.js';

class UserServices {
  verifyPassword = (pass) => JSON.parse(
    cryptoJs.AES.decrypt(pass.toString(), process.env.SECRET_KEY).toString(
      cryptoJs.enc.Utf8,
    ),
  );

  authorization = async (req) => {
    const authUser = {
      name: req.user.name,
      email: req.user.email,
    };

    return authUser;
  };

  createUser = (data) => UserRep.createUser(data);
}
export default new UserServices();
