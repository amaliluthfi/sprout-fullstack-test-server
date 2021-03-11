const express = require('express')
const router = express.Router()
const UserController = require('../controllers/user-controller')
const authenticate = require('../middleware/auth')

router.post('/register', UserController.register)
router.post('/login', UserController.login)
router.get('/', UserController.findUsers)
router.delete('/:id', UserController.deleteUser)

module.exports = router