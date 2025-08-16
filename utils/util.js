import { MongoClient, ServerApiVersion } from 'mongodb';
import("@tensorflow/tfjs-node");
import us_encoder from "@tensorflow-models/universal-sentence-encoder";

const { MONGO_HOST, MONGO_USER, MONGO_PASS, MONGO_DB } = process.env;

const uri = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/?retryWrites=true&w=majority`;

let client;
let model;

async function loadModel() {
  if (!model) {
    model = await us_encoder.load();
  }
}

export async function vectorizeText(text) {
  await loadModel();
  const embeddingsRequest = await model.embed(text);
  const vector = embeddingsRequest.arraySync()[0];
  return vector;
}

export async function connectToMongoDB() {
  if (!client) {
    client = new MongoClient(uri);
    try {
      await client.connect();
      console.log('Connected to MongoDB Atlas');
    } catch (err) {
      console.error('Error connecting to MongoDB:', err);
      throw err;
    }
  }
  return client.db(MONGO_DB);
}

export async function closeMongoDBConnection() {
  if (client) {
    await client.close();
    console.log('MongoDB connection closed');
    client = null;
  }
}
