const cryptoJs = require("crypto-js"),
  models = require("../init/models"),
  CustomError = require("../helpers/customError"),
  config = require("../../config");

class UserRepository {
  
  createUser = async data => {
    try {
      const result = await models.User.findOne({
        where: {
          email: data.email
        }
      });

      if (result)
        throw new CustomError(
          "createUserError",
          409,
          "User with this email already exist"
        );

      if (!result) {
        let encryptedPass = cryptoJs.AES.encrypt(
          JSON.stringify(data.password),
          config.secretKey
        );

        encryptedPass = encryptedPass.toString();

        const user = await models.User.create({
          email: data.email,
          name: data.name,
          password: encryptedPass
        });

        if (!user)
          throw new CustomError("createUserError", 409, "User not created");
         
          return {
            email: user.email,
            name: user.name
          };
      }
    } catch (e) {
      if (e instanceof CustomError) throw e;

      throw new CustomError("undefined error", 400, "Something wrong");
    }
  };

  verifyPassword = pass =>
    JSON.parse(
      cryptoJs.AES.decrypt(pass.toString(), process.env.SECRET_KEY).toString(
        cryptoJs.enc.Utf8
      )
    );
}

module.exports = new UserRepository();
