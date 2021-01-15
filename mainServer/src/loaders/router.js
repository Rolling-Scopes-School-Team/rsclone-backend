const authRouter = require("../routes/authRouter");

class Router {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use("/auth", authRouter);
  };
} 

module.exports = Router;
