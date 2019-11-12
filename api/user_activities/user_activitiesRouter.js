const express = require("express");

const router = express.Router();

const UserActivities = require("./user_activities.js");

// GET /useractivities - Gets all user_activities
router.get("/", (req, res) => {
  UserActivities.getAllUserActivities()
    .then(user_activities => {
      res.status(200).json(user_activities);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while getting all user_activities.",
        error: err
      });
    });
});

// GET /useractivities/user/:user_id - Get all activities associated to the user_id
router.get("/user/:user_id", (req, res) => {
  const { user_id } = req.params;

  UserActivities.getUserActivitiesByUserId(user_id)
    .then(user_activities => {
      res.status(200).json(user_activities);
    })
    .catch(err => {
      res.status(500).json({
        message: `Error occurred while getting user_activities for user_id: ${user_id}`,
        error: err
      });
    });
});

// GET /useractivities/activity/:activity_id - Get all users associated to the activity_id
router.get("/activity/:activity_id", (req, res) => {
  const { activity_id } = req.params;

  UserActivities.getUserActivitiesByActivityId(activity_id)
    .then(user_activities => {
      res.status(200).json(user_activities);
    })
    .catch(err => {
      res.status(500).json({
        message: `Error occurred while getting user_activities for activity_id: ${activity_id}`,
        error: err
      });
    });
});

// POST /useractivities - Add user to the associated activity
router.post("/", (req, res) => {
  const userActivity = req.body;

  UserActivities.addUserActivity(userActivity)
    .then(user_activity => {
      res.status(201).json(user_activity);
    })
    .catch(err => {
      res.status(500).json({
        message: "Error occurred while adding a user_activity",
        error: err
      });
    });
});

// router.delete("", (req, res) => {})

module.exports = router;
