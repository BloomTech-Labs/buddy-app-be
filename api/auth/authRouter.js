const express = require('express');
const router = express.Router();
const Auth = require('./auth');
router.post('/signin', (req, res) => {
    const user = req.body;
    Auth.getUserByEmail(user.email)
    .then(loggedInUser => {
        res.status(200).json(loggedInUser)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.post('/signup', (req, res) => {
    const user = req.body;
    Auth.addUser(user)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

module.exports = router;