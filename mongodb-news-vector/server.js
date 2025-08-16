import '../utils/env.js';
import express from 'express';
import { vectorizeText, connectToMongoDB, closeMongoDBConnection } from '../utils/util.js';

const { MONGO_COLLECTION } = process.env;

const app = express();
app.use(express.json());

app.post('/search', async (req, res) => {
  const text = req.body.text;
  if (!text) {
    return res.status(400).send({ error: 'Text is required' });
  }

  try {
    const db = await connectToMongoDB();
    const collection = db.collection(MONGO_COLLECTION);
    const query = await vectorizeText(text);

    const agg = [
      {
        '$vectorSearch': {
          'index': 'vector_search',
          'path': 'description_vector',
          'queryVector': query,
          'numCandidates': 5,
          'limit': 5
        }
      },
      {
        '$project': {
          '_id': 0,
          'link': 1,
          'headline': 1,
          'score': {
            '$meta': 'vectorSearchScore'
          }
        }
      },
      {
        '$match': {
          'score': { '$gt': 0.4 }
        }
      }
    ];
    const results = await collection.aggregate(agg).toArray();
    res.status(200).send(results);
  } catch (error) {
    console.error('Error', error);
    res.status(500).send({ error: 'Internal server error' });
  } finally {
    await closeMongoDBConnection();
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});