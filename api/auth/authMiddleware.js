const Auth = require('./auth');
const bcrypt = require('bcryptjs');

module.exports = {
    validateUser,
    validateNewUser

}

function validateUser(req, res, next) {
    const user = req.body;
    Auth.getUserByEmail(user.email)
    .then(returnedUser => {
        if(returnedUser) {
           if(bcrypt.compareSync(user.password, returnedUser.password)) {
               next()
           } else{
               res.status(401).json({message: 'Invalid Credentials'})
           }
        } else {
            res.status(400).json({message: 'User not found'})
        }
    })

}

function validateNewUser(req, res, next) {
    const user = req.body;
    if(!user.first_name) {
        res.status(400).json({message: 'Please provide a first name'})
    } else if(!user.password) {
        res.status(400).json({message: 'Please provide a password'})
    } else if(!user.email) {
        res.status(400).json({message: 'Please provide an email'})
    } else if(!user.location) {
        res.status(400).json({message: 'Please provide a zip code'})
    } else {
        next();
    }
}