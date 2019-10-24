const express = require('express');
const server = express();
const cors = require('cors');

const InterestsRoute = require('./interests/interestsRouter');
const UsersRoute = require('./users/usersRouter');
const AuthRoute = require('./auth/authRouter');

const { jwtauth } = require('./auth/authMiddleware');

server.use(express.json());

server.use('/interests', jwtauth, InterestsRoute);
server.use('/users', jwtauth, UsersRoute);
server.use('/auth', AuthRoute);
server.use(cors());

module.exports = server;
