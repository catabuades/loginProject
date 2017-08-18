const express = require('express')
const router = express.Router()

// handlers for auth
const handlerLogPage = require('./auth/handlerLogPage')
const showLogin = require('./auth/showLogin')
const showError = require('./auth/showError')
const showRegister = require('./auth/showRegister')
const showLogout = require('./auth/showLogout')
const handlePostLogin = require('./auth/handlePostLogin')
const handlePostSignIn = require('./auth/handlePostSignIn')

// handlers for tasks
const showTasksPage = require('./tasks/showTasksPage')

// handlers for task
const createNewTask = require('./task/createNewTask')
const deleteTask = require('./task/deleteTask')
const editTask = require('./task/editTask')
const completedTask = require('./task/completedTask')

// router for auth
router.get('/', handlerLogPage)
router.get('/login', showLogin)
router.get('/error', showError)
router.get('/register', showRegister)
router.get('/logout', showLogout)
router.post('/login', handlePostLogin)
router.post('/sign-in', handlePostSignIn)

// router for tasks
router.get('/to-do', showTasksPage)

// router for task
router.post('/tasks', createNewTask)
router.delete('/task/:id', deleteTask)
router.put('/task/:id', editTask)
router.put('/completed/:id', completedTask)

module.exports = router
