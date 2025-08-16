require('dotenv').config();
import newsArray from './data/newsData.json' assert { type: "json" };
import { vectorizeText, connectToMongoDB, closeMongoDBConnection, MONGO_COLLECTION } from '../utils/util.js';


async function loadVectorizedData() {
  const db = await connectToMongoDB();
  const collection = db.collection(MONGO_COLLECTION);
  try {
    for (const newsItem of newsArray) {
      const text = newsItem.short_description;
      const description_vector = await vectorizeText(text);
      if (description_vector && description_vector.length > 0) {
        await collection.insertOne({
          link: newsItem.link,
          headline: newsItem.headline,
          category: newsItem.category,
          short_description: newsItem.short_description,
          authors: newsItem.authors,
          date: newsItem.date,
          description_vector: description_vector
        });
        console.log('Vectorized data stored in MongoDB Atlas for:', newsItem.headline);
      } else {
        console.log('No vectors were generated for:', newsItem.headline);
      }
    }
  } catch (error) {
    console.error('Error during data loading:', error);
  } finally {
    await closeMongoDBConnection();
  }
}

loadVectorizedData();

