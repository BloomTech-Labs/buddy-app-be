const db = require("../../data/dbconfig");

module.exports = {
  getActivities,
  deleteActivity
};

function getActivities() {
  return db("activities");
}

function deleteActivity(id) {
  return db("activities")
    .where({ id })
    .del();
}
