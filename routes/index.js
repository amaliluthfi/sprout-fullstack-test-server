const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller')
const authenticate = require('../middleware/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.use(authenticate)
router.get('/', UserController.findUsers)

module.exports = router