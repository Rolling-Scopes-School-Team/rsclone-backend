import passport from 'passport';

import Users from '../services/userServices.js';

import CustomError from '../helpers/customError.js';

class UsersController {
  authuser = (req, res, next) => {
    req.email = req.body.email;

    req.password = req.body.password;

    // eslint-disable-next-line consistent-return
    passport.authenticate('local', (err, user) => {
      if (err) {
        return next(
          new CustomError(
            'authError',
            401,
            'You are not logged in - wrong password or email,user not found ',
          ),
        );
      }

      if (!user) {
        return next(
          new CustomError(
            'authError',
            401,
            'You are not logged in - wrong password or email,user not found ',
          ),
        );
      }

      req.logIn(user, (error) => {
        if (error) {
          return next(
            new CustomError(
              'authError',
              401,
              'You are not logged in - wrong password or email,user not found ',
            ),
          );
        }

        return Users.authorization(req, res).then((data) => res.send({ user: data }));
      });
    })(req, res, next);
  };

  addUser = (req, res, next) => {
    Users.createUser(req.body)
      .then((user) => res.send({ user }))
      .catch((err) => next(err));
  };

  autoLogin = (req, res) => res.send({ user: { name: req.user.name, email: req.user.email } });
}

export default new UsersController();
