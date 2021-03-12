const { MongoClient } = require('mongodb')
const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

let database = null

async function connect () {
  try {

    await client.connect()
    const db = client.db('sproutest')
    database = db

    return db

  } catch(err) {
    console.log(err);
  }
}

module.exports = {
  connect,
  getDatabase() {
    return database
  }
}