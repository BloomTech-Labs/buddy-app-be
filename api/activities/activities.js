const db = require("../../data/dbconfig");

module.exports = {
  getActivities,
  addActivity,
  updateActivity,
  deleteActivity
};

function addActivity(activity) {
  return db("activities")
    .insert(activity, "id")
    .then(res => {
      // return getActivityById()
    });
}

function updateActivity(id, activity) {
  return db("activities")
    .where({ id })
    .update(activity)
    .then(res => {
      // return getActivityById()
    });
}

function getActivities() {
  return db("activities");
}

function deleteActivity(id) {
  return db("activities")
    .where({ id })
    .del();
}
