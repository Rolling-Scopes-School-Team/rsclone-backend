import Router from './router.js';

import AppLoader from './appLoader.js';

import PassportLoader from './passport.js';

import { errorHandler } from '../middlewares/errorHandler.js';

class InitLoaders {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    new AppLoader(this.app).init();

    new PassportLoader(this.app).init();

    new Router(this.app).init();

    this.app.use(errorHandler);
  };
}

export default InitLoaders;
