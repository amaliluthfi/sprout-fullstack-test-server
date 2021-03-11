const Users = require('../models/users')
const { checkToken } = require('../helper/jwt')

function authenticate(req, res, next) {
  let { access_token } = req.headers
  let decoded = checkToken(access_token)

  Users.findOne({where: {email: decoded.email}})
    .then(user => {
      if(!user) res.status(400).json({message: 'you should log in first'})
      req.user = user
      next()
    }).catch(err => {
      req.status(500).json({message: 'something wrong'})
   })
}

module.exports = authenticate