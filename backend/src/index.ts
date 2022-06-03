import * as express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import { messageService } from "./services/message/message.service";
import { Message } from "./services/message/message.type";

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

  socket.on("message", async (text) => {
    const message = await messageService.create({
      from: username,
      text,
      time: new Date(),
    });

    io.emit("message", message);
  });

  socket.on("getMessagesRequest", async () => {
    const messages = await messageService.getAll();
    socket.emit("getMessagesResponse", messages);
  });
});

httpServer.listen(4111, () => {
  console.log(`Server running at http://localhost:${4111}/`);
});
