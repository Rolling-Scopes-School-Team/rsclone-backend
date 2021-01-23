import cookieParser from 'cookie-parser';

import bodyParser from 'body-parser';

import session from 'express-session';

import cors from 'cors';

import express from 'express';

import config from '../../config.js';

import PassportMid from '../middlewares/passport.js';

import sessionStore from './redisStore.js';

class AppLoader {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use(bodyParser.json());

    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      }),
    );

    this.app.use('/static', express.static('static'));

    this.app.use(cookieParser());

    this.app.use(bodyParser());

    this.app.use(
      session({
        key: 'express.sid',
        store: sessionStore,
        secret: config.secret,
        cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false },
        resave: false,
        saveUninitialized: false,
      }),
    );

    this.app.use(cors({ origin: 'http://localhost:8080', credentials: true }));

    new PassportMid().init();
  };
}

export default AppLoader;
