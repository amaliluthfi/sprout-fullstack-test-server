const { MongoClient } = require('mongodb')

let database = null

async function connect () {
  try {
    const uri = 'mongodb://localhost:27017'
    const client = MongoClient(uri, { useUnifiedTopology: true}) 

    await client.connect()
    const db = client.db('entertainme')
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