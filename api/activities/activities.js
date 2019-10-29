const db = require("../../data/dbconfig");

module.exports = {
  getActivities,
  getActivityById,
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
