const express = require("express");
const router = express.Router();
const Auth = require("./auth");
const bcrypt = require("bcryptjs");
const { validateUser, validateNewUser } = require("./authMiddleware");
const passport = require("passport");
router.post("/signin", validateUser, (req, res) => {
  const user = req.body;

  Auth.getUserByEmail(user.email)
    .then(loggedInUser => {
      res.status(200).json(loggedInUser);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/signup", validateNewUser, (req, res) => {
  let user = req.body;
  const hash = bcrypt.hashSync(user.password, 14);
  user.password = hash;
  Auth.addUser(user)
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// google sign on
router.get(
  "/google",
  passport.authenticate("google", {
    scope: ["profile", "email"]
  })
);

router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/profile");
});

router.get("/logout", (req, res) => {
  console.log("logging out!");
  user = {};
  res.redirect("/");
});

module.exports = router;
