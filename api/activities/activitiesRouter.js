const express = require("express");
const router = express.Router();

const Activities = require("./activities.js");

// get a list of all activities
router.get("/", (req, res) => {
  Activities.getActivities()
    .then(activityList => {
      res.status(200).json(activityList);
    })
    .catch(err => {
      res.status(500).json({ message: `Failed to get activities` });
    });
});

// delete an activity by its ID
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
