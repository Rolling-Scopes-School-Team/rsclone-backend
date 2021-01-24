import passport from 'passport';

class PassportLoader {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use(passport.initialize());

    this.app.use(passport.session());
  };
}

export default PassportLoader;
