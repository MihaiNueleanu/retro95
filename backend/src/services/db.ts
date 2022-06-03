import "dotenv/config";
import { MongoClient, Db, Collection } from "mongodb";
import { Message } from "./message/message.type";

export let db: Db;
export let messageCol: Collection<Message>;

const client = new MongoClient(process.env.DATABASE_URL!);

client.connect().then(() => {
  db = client.db("retro95");
  messageCol = db.collection("message");
});
