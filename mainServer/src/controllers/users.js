const Users = require("../services/userServices");
const customError = require("../helpers/customError");

const passport = require("passport");

class UsersController {
 
  authuser = (req, res, next) => {
    req.email = req.body.email;

    req.password = req.body.password;

    passport.authenticate("local", function(err, user, info) {
      if (err) {
        return next(
          new customError(
            "authError",
            401,
            "You are not logged in - wrong password or email,user not found "
          )
        );
      }

      if (!user) {
        return next(
          new customError(
            "authError",
            401,
            "You are not logged in - wrong password or email,user not found "
          )
        );
      }

      req.logIn(user, function(err) {
        if (err) {
          return next(
            new customError(
              "authError",
              401,
              "You are not logged in - wrong password or email,user not found "
            )
          );
        }

        return Users.authorization(req, res).then(data => {
          return res.send(data);
        });
      });
    })(req, res, next);
  };

  addUser = (req, res, next) => {
    Users.createUser(req.body)
      .then((user) => res.send(user))
      .catch(err => next(err));
  };

}

module.exports = new UsersController();
