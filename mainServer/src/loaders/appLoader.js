const cookieParser = require("cookie-parser"),
  bodyParser = require("body-parser"),
  session = require("express-session"),
  cors = require("cors"),
  PassportMid = require("../middlewares/passport"),
  express = require("express"),
  config = require("../../config"),
  sessionStore = require("./redisStore");

class AppLoader {
  constructor(app) {
    this.app = app;
  }

  init = () => {
    this.app.use(bodyParser.json());

    this.app.use(
      bodyParser.urlencoded({
        extended: false,
      })
    );

    this.app.use("/static", express.static("static"));

    this.app.use(cookieParser());

    this.app.use(bodyParser());

    this.app.use(
      session({
        key: "express.sid",
        store: sessionStore,
        secret: config.secret,
        cookie: { maxAge: 24 * 60 * 60 * 1000, secure: false },
        resave: false,
        saveUninitialized: false,
      })
    );


    this.app.use(cors({ origin: "http://localhost:8080", credentials: true }));

    new PassportMid().init();
  };
}

module.exports = AppLoader;
