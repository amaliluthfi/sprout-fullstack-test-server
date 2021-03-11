const jwt = require('jsonwebtoken')
SECRET_KEY = process.env.SECRET_KEY
function tokenGenerate(payload) {
//   console.log(SECRET_KEY);
  return jwt.sign(payload, SECRET_KEY)
}

function checkToken(token) {
  return jwt.verify(token, SECRET_KEY)
}

module.exports = {
  tokenGenerate,
  checkToken
}