const cryptoJs = require("crypto-js"),
  UserRep = require("../repository/userRepository");

class UserServices {
  
  verifyPassword = pass =>
    JSON.parse(
      cryptoJs.AES.decrypt(pass.toString(), process.env.SECRET_KEY).toString(
        cryptoJs.enc.Utf8
      )
    );

  

  authorization = async req => {
    const checkLogin = true;

    const authUser = {
      name: req.user.name,
      email: req.user.email
    };

    return authUser;
  };


  createUser = data => {
    return UserRep.createUser(data);
  };

}
module.exports = new UserServices();
