const Users = require('../models/users')
const { checkToken } = require('../helper/jwt')

function authenticate(req, res, next) {
  let { access_token } = req.headers
  let decoded = checkToken(access_token)
  let { email } = decoded
  Users.findOne({email})
    .then(user => {
      console.log(user);
      if(!user) res.status(400).json({message: 'invalid email/password'})
      req.user = user
      next()
    }).catch(err => {
      req.status(500).json({message: 'something wrong'})
   })
}

module.exports = authenticate