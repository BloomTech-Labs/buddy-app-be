const express = require("express");
const server = express();

const InterestsRoute = require("./interests/interestsRouter");

server.use(express.json());

server.use("/interests", InterestsRoute);

module.exports = server;
