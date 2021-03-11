if(process.env.NODE_ENV === "development") require('dotenv').config()
const express = require('express')
const { connect } = require('./config/mongodb')
const app = express()
const PORT = 3000
const routes = require('./routes')

let database = null

app.use(express.urlencoded({extended: true}))
app.use(express.json())

connect().then( async (db) => {
  console.log('mongo berhasil connect');
  database = db

  app.use(routes)

  app.listen(PORT, () => {
    console.log(`connected to ${PORT}`);
  })
})