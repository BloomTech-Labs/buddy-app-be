const express = require("express");

const Activities = require("./activities");

const router = express.Router();

// POST /activities
router.post("/", (req, res) => {
  const activity = req.body;

  Activities.addActivity(activity)
    .then(newActivity => {
      res.status(201).json(newActivity);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while adding a new activity.",
        error: err
      });
    });
});

// PUT /activities/:activityId
router.put("/:activityId", (req, res) => {
  const { activityId } = req.params;
  const changes = req.body;

  Activities.updateActivity(activityId, changes)
    .then(activity => {
      res.status(200).json(activity);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while updating an activity.",
        error: err
      });
    });
});

module.exports = router;
