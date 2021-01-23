import { Strategy } from 'passport-local';

import passport from 'passport';

import Users from '../services/userServices.js';

import models from '../init/models.js';

class PassportMid {
  init = () => {
    passport.use(
      new Strategy(
        {
          usernameField: 'email',
          passwordField: 'password',
        },

        ((username, password, done) => {
          models.User.findOne({ where: { email: username } }).then(
            (user, err) => {
              const userData = user.dataValues;

              if (err) {
                return done(err);
              }

              if (!userData) {
                return done(null, false, { message: 'Incorrect username' });
              }

              if (password !== Users.verifyPassword(userData.password)) {
                return done(null, false, { message: 'Incorrect password' });
              }

              return done(null, userData);
            },
          );
        }),
      ),
    );

    passport.serializeUser((user, done) => {
      done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
      models.User.findOne({ where: { id } }).then((user, err) => {
        done(err, user);
      });
    });

    return passport;
  };
}

export default PassportMid;
