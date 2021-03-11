const bcrypt = require('bcryptjs')

function hashPassword(password) {
  const salt = bcrypt.genSaltSync(10)
  return bcrypt.hashSync(password, salt)
}

function comparePassword(loginPassword, dbPassword) {
  return bcrypt.compareSync(loginPassword, dbPassword)
}


module.exports = {
  hashPassword,
  comparePassword
}