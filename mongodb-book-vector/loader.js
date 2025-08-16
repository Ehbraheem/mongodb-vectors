import '../utils/env.js';
import fs from 'fs';
import csv from 'csv-parser';

const { MONGO_COLLECTION } = process.env;

import { vectorizeText, connectToMongoDB, closeMongoDBConnection } from '../utils/util.js';


async function loadVectorizedData() {
  const db = await connectToMongoDB();
  const collection = db.collection(MONGO_COLLECTION);

  try {
    const results = [];

    fs.createReadStream('data/books-summary.csv')
      .pipe(csv())
      .on('data', (data) => results.push(data))
      .on('end', async () => {
        for (const book of results) {
          const text = book.summaries;
          const description_vector = await vectorizeText(text);

          if (description_vector && description_vector.length > 0) {
            await collection.insertOne({
              id: book.id,
              book_name: book.book_name,
              summaries: book.summaries,
              categories: book.categories,
              description_vector: description_vector
            });
            console.log('Vectorized data stored in MongoDB Atlas for:', book.book_name);
          } else {
            console.log('No vectors were generated for:', book.book_name);
          }
        }
        await closeMongoDBConnection();
      });

  } catch (error) {
    console.error('Error during data loading:', error);
    await closeMongoDBConnection();
  }
}

loadVectorizedData();