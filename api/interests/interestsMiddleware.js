const Interests = require("./interests");

module.exports = {
  validateInterest
};

function validateInterest(req, res, next) {
  let id = req.params.id;

  Interests.getInterestById(id)
    .then(interest => {
      if (interest) {
        req.interest = interest;
        next();
      } else {
        res.status(400).json({ message: "Invalid Interest ID" });
      }
    })
    .catch(err => res.status(500).json(err));
}
