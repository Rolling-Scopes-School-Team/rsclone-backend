const authRouter = require("../routes/authRouter");
const gameRouter = require("../routes/gameRouter");


class Router {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use("/auth", authRouter);
    this.app.use("/game", gameRouter);
  };
} 

module.exports = Router;
