const db = require("../../data/dbconfig");

module.exports = {
  getInterests,
  getInterestById,
  getUserInterests,
  addUserInterest,
  deleteUserInterest
};

function getInterests() {
  return db("interests");
}

function getInterestById(id) {
  return db("interests")
    .where({ id })
    .first();
}

// user interests

function getUserInterests() {
  return db("user_interests").then(user_interests => user_interests);
}

function addUserInterest(userInterest) {
  return db("user_interests")
    .insert(userInterest, "id")
    .then(result => result);
}

function deleteUserInterest(user_id, interest_id) {
  return db("user_interests")
    .del()
    .where({ user_id: user_id, interests_id: interest_id })
    .then(result => result);
}
