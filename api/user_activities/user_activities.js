const db = require("../../data/dbconfig.js");

module.exports = {
  getAllActivities,
  getAllUserActivities,
  getUserActivitiesByUserId,
  getUserActivitiesByActivityId,
  addUserActivity,
  deleteUserActivity
};

function getAllUserActivities() {
  return db("user_activities");
}

/* 
  Gets both the user's created activities and the user's joined activities. returns the name, date, time and description of each activity. 
 */
function getAllActivities(user_id) {
  return db("user_activities")
    .where({ user_id })
    .join("activities", "user_activities.user_id", "activities.organizer_id")
    .join("activities", "user_activities.activies_id", "activities.id")
    // .select("activities.date", "activities.name", "activities.time", "activities.notes")

}

function getUserActivitiesByUserId(user_id) {
  return db("user_activities")
    .where({ user_id })
    .then(user_activities => user_activities);
}

function getUserActivitiesByActivityId(activity_id) {
  return db("user_activities")
    .where({ activity_id })
    .then(user_activities => user_activities);
}

function addUserActivity(userActivity) {
  let user_id = userActivity.user_id;
  let activity_id = userActivity.activity_id;

  return db("user_activities")
    .insert(userActivity)
    .then(result => {
      return result; // returns an id
      //     --- Not sure what data to return at the moment ---
      // return (
      //   db("user_activities as ua")
      //     .join("users as u", "ua.user_id", "u.id")
      //     .join("activities as a", "ua.activity_id", "a.id")
      //     .select("u.first_name", "a.id", "a.name")
      //     .where({ user_id, activity_id })
      //     .first()
      // );
    });
}

function deleteUserActivity(user_id, activity_id) {
  return db("user_activities")
    .del()
    .where({ user_id, activity_id })
    .then(result => result);
}
