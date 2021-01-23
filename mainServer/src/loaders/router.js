import authRouter from '../routes/authRouter.js';
import gameRouter from '../routes/gameRouter.js';

class Router {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use('/auth', authRouter);
    this.app.use('/game', gameRouter);
  };
}

export default Router;
