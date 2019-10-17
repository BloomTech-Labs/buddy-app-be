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

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Interests.getInterestById(id)
    .then(interest => {
      res.status(200).json(interest);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

// user interests

router.get("/user/:userid", (req, res) => {
  const userId = req.params.id;
  Interests.getUserInterests(userId)
    .then(userInterests => {
      res.status(200).json(userInterests);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.post("/user", (req, res) => {
  const userInterest = req.body;

  Interests.addUserInterest(userInterest)
    .then(newInterest => {
      res.status(201).json(newInterest);
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

router.delete("/user/:userid/:interestid", (req, res) => {
  const userId = req.params.userid;
  const interestId = req.params.interestid;

  Interests.deleteUserInterest(userId, interestId)
    .then(deleted => {
      res.status(200).json({
        message: `Successfully removed interest #${interestId} from user #${userId}`
      });
    })
    .catch(err => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
