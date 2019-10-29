const db = require("../../data/dbconfig");

module.exports = {
  getActivities,
  getActivityById,
  getActivitiesByInterests,
  getActivitiesByOrganizer,
  addActivity,
  updateActivity,
  deleteActivity
};

function getActivities() {
  return db("activities");
}

function getActivityById(id) {
  return db("activities")
    .where({ id })
    .first();
}

function getActivitiesByInterests(interest_id) {
  return db("activities").where({ interest_id });
}

function getActivitiesByOrganizer(organizer_id) {
  return db("activities").where({ organizer_id });
}

function addActivity(activity) {
  return db("activities")
    .insert(activity, "id")
    .then(([id]) => {
      return getActivityById(id);
    });
}

function updateActivity(id, activity) {
  return db("activities")
    .where({ id })
    .update(activity)
    .then(res => {
      return getActivityById(id);
    });
}

function deleteActivity(id) {
  return db("activities")
    .where({ id })
    .del();
}
