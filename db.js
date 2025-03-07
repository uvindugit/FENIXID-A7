const { MongoClient } = require('mongodb');
const config = require('./config'); // Import config file

// MongoDB client instance
let db;

// Connect to MongoDB
async function connectToDB() {
  if (!db) {
    try {
      const client = new MongoClient(config.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });
      await client.connect();
      console.log('Connected to MongoDB');
      db = client.db(config.dbName);
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw new Error('MongoDB connection failed');
    }
  }
}

// Get a collection dynamically
function getCollection(collectionName) {
  if (!db) {
    throw new Error('Database not connected');
  }
  return db.collection(collectionName);
}

// Export functions
module.exports = {
  connectToDB,
  getContactsCollection: () => getCollection(config.collections.contacts),
  getAuthCollection: () => getCollection(config.collections.googleAuth)
};