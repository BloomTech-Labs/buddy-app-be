const express = require("express");
const server = express();

const InterestsRoute = require("./interests/interestsRouter");
const UsersRoute = require("./users/usersRouter");
const AuthRoute = require("./auth/authRouter");

server.use(express.json());

server.use("/interests", InterestsRoute);
server.use("/users", UsersRoute);
server.use("/auth", AuthRoute);

module.exports = server;
