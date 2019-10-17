const express = require('express');
const router = express.Router();
const Auth = require('./auth');
const bcrypt = require('bcryptjs');
const {validateUser, validateNewUser} = require('./authMiddleware');

router.post('/signin',validateUser, (req, res) => {
    const user = req.body;

    Auth.getUserByEmail(user.email)
    .then(loggedInUser => {
        res.status(200).json(loggedInUser)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

router.post('/signup',validateNewUser, (req, res) => {
    let user = req.body;
    const hash = bcrypt.hashSync(user.password, 14)
    user.password = hash;
    Auth.addUser(user)
    .then(newUser => {
        res.status(201).json(newUser)
    })
    .catch(err => {
        res.status(500).json({error: err})
    })
})

module.exports = router;