const db = require('../../data/dbconfig');

module.exports = {
    getUserByEmail,
    addUser
}

function getUserByEmail(email) {
    return db('users')
    .where({email})
    .first()
    
}

function addUser(user) {
    return db('users')
    .insert(user, 'id')
    .then(res => {
        getUserByEmail(user.email).then(newUser => newUser)
    })
}