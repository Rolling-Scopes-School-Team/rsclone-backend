import cryptoJs from 'crypto-js';

import models from '../init/models.js';

import CustomError from '../helpers/customError.js';

import config from '../../config.js';

class UserRepository {
  // eslint-disable-next-line consistent-return
  createUser = async (data) => {
    try {
      const result = await models.User.findOne({
        where: {
          email: data.email,
        },
      });

      if (result) {
        throw new CustomError(
          'createUserError',
          409,
          'User with this email already exist',
        );
      }

      if (!result) {
        let encryptedPass = cryptoJs.AES.encrypt(
          JSON.stringify(data.password),
          config.secretKey,
        );

        encryptedPass = encryptedPass.toString();

        const user = await models.User.create({
          email: data.email,
          name: data.name,
          password: encryptedPass,
        });

        if (!user) { throw new CustomError('createUserError', 409, 'User not created'); }

        return {
          email: user.email,
          name: user.name,
        };
      }
    } catch (e) {
      if (e instanceof CustomError) throw e;

      throw new CustomError('undefined error', 400, 'Something wrong');
    }
  };

  verifyPassword = (pass) => JSON.parse(
    cryptoJs.AES.decrypt(pass.toString(), process.env.SECRET_KEY).toString(
      cryptoJs.enc.Utf8,
    ),
  );
}

export default new UserRepository();
