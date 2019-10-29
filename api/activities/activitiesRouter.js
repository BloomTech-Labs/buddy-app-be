const express = require("express");

const Activities = require("./activities");

const router = express.Router();

// GET a list of all activities
router.get("/", (req, res) => {
  Activities.getActivities()
    .then(activityList => {
      res.status(200).json(activityList);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to get activities` });
    });
});

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

// DELETE an activity by its ID
router.delete("/:activityId", (req, res) => {
  const activityId = req.params.activityId;
  Activities.deleteActivity(activityId)
    .then(deleted => {
      res.status(200).json({
        message: `Successfully removed activity #${activityId}`
      });
    })
    .catch(err => {
      res
        .status(500)
        .json({ message: `Failed to delete activity #${activityId}` });
    });
});

module.exports = router;
