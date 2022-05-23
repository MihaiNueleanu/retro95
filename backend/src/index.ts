import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express.default();
const httpServer = createServer(app);

const io = new Server(httpServer, { transports: ["websocket"] });

io.on("connection", (socket) => {
  let username = `User ${Math.round(Math.random() * 999999)}`;

  socket.on("name", (message) => {
    username = message;
    socket.emit("name", username);
    console.log("username", username);
  });

  socket.on("message", (text) => {
    console.log("text", text);
    io.emit("message", {
      from: username,
      text,
      time: new Date().toLocaleString(),
    });
  });
});

httpServer.listen(4111, () => {
  console.log(`Server running at http://localhost:${4111}/`);
});
