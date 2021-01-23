// eslint-disable-next-line consistent-return
export const authenticationMiddleware = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }

  res.sendStatus(401);
};

export default { authenticationMiddleware };
