import express from "express";
import { Server } from "socket.io";
import * as http from "http";

const port = process.env.PORT || 4111;
const app = express();
const server = http.createServer(app);

const io = new Server(server);

io.on("connection", (socket) => {
  let username = `User ${Math.round(Math.random() * 999999)}`;

  socket.on("name", (message) => {
    username = message;
    socket.emit("name", username);
  });

  socket.on("message", (message) => {
    io.emit("message", {
      from: username,
      message: message,
      time: new Date().toLocaleString(),
    });
  });
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
