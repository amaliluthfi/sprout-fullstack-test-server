const { getDatabase } = require('../config/mongodb')
const { hashPassword } = require('../helper/bcryptjs')

class Users {
  static find() {
    return getDatabase().collection('users').find().toArray()
  }

  static findOne(email) {
    return getDatabase().collection('users').findOne(email)
  }

  static insertOne(payload) {
    payload = {...payload, password: hashPassword(payload.password) }
    return getDatabase().collection('users').insertOne(payload)
  }

  static deleteOne(id) {
    return getDatabase().collection('users').deleteOne(id)
  }
}

module.exports = Users