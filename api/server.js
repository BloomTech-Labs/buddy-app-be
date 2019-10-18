const express = require("express");
const server = express();
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google");
const keys = require("../config");

const InterestsRoute = require("./interests/interestsRouter");
const UsersRoute = require("./users/usersRouter");
const AuthRoute = require("./auth/authRouter");

server.use(express.json());

server.use("/interests", InterestsRoute);
server.use("/users", UsersRoute);
server.use("/auth", AuthRoute);
server.use(cors());

// methods required for passport
passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((user, cb) => {
  cb(null, user);
});

// Google Strategy
passport.use(
  new GoogleStrategy(
    {
      clientID: keys.GOOGLE.clientID,
      clientSecret: keys.GOOGLE.clientSecret,
      callbackUrl: "/auth/google/callback"
    },
    (accessToken, refreshToken, profile, cb) => {
      console.log(JSON.stringify(profile));
      user = { ...profile };
      return cb(null, profile);
    }
  )
);

server.use(passport.initialize());

// google sign on
server.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

server.get(
  "/auth/google/callback",
  passport.authenticate("google"),
  (req, res) => {
    res.redirect("/profile");
  }
);

module.exports = server;
