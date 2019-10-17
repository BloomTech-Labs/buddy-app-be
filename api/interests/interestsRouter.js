const express = require("express");
const router = express.Router();

const Interests = require("./interests.js");

router.get("/", (req, res) => {
  Interests.getInterests()
    .then(interests => {
      res.status(200).json(interests);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
