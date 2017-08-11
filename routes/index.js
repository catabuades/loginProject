const express = require('express')
const router = express.Router()

const showLogin = require('./handlers/showLogin')
const showHome = require('./handlers/showHome')
const showError = require('./handlers/showError')
const showRegister = require('./handlers/showRegister')
const showLogout = require('./handlers/showLogout')
const handlePostLogin = require('./handlers/handlePostLogin')
const handlePostSignIn = require('./handlers/handlePostSignIn')

router.get('/login', showLogin)
router.get('/home', showHome)
router.get('/error', showError)
router.get('/register', showRegister)
router.get('/logout', showLogout)
router.post('/login', handlePostLogin)
router.post('/sign-in', handlePostSignIn)

module.exports = router
