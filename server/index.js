"use strict";

require("dotenv").config();

const express = require("express");
const app = express();

const cors = require("cors");
const http = require("http");
const { Server } = require("socket.io");

const socketHandlers = require("./helpers/socket-helper");

const PORT = process.env.PORT || 8000;

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User connected ${socket.id}`);

  socketHandlers(socket, io);
});

server.listen(PORT, () => console.log("Server listening at %s", PORT));
