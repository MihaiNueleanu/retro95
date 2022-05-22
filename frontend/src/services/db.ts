import 'dotenv/config';
import { MongoClient, Db } from 'mongodb';

const client = new MongoClient(process.env.DATABASE_URL!);
let db: Db;

client.connect().then(() => {
	client.db('retro95');
});

export function getDb() {
	return db;
}
