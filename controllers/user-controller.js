const Users = require('../models/users')
const { comparePassword } = require('../helper/bcryptjs')
const { tokenGenerate } = require('../helper/jwt')

class UserController {
  static findUsers(req, res) {
    Users.find()
    .then(data => {
      res.json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err) 
    })
  }

  static register(req, res) {
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      phoneNumber: req.body.phoneNumber,
      password: req.body.password
    }
    Users.insertOne(newUser)
    .then(data => {
      res.status(201).json(data)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err) 
    })
  }

  static login(req, res) {
    let user = {
      email: req.body.email,
      password: req.body.password
    }

    Users.findOne({email: user.email})
    .then(dataUser => {
      console.log(dataUser);
      if(!dataUser) res.status(404).json({msg: 'invalid email/password'})
      let match = comparePassword(user.password, dataUser.password)
      if(!match) res.status(404).json({msg: 'invalid email/password'})
      let payload = {
        name: dataUser.name,
        email: dataUser.email
      }
      let access_token = tokenGenerate(payload)
      res.status(200).json({access_token})
    })
    .catch(err => {
      console.log(err);
    })
  }
}

module.exports = UserController