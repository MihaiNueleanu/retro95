import { messageCol } from "../db";
import { Message } from "./message.type";

export const messageService = {
  create: async (message: Message) => {
    await messageCol.insertOne(message);
    return message;
  },
  getAll: async () => {
    const messages = await messageCol.find().sort({ time: 1 }).toArray();
    return messages;
  },
};
