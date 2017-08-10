// modulos que se requieren
const fs = require('fs')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('express-session')
// arranca express
const app = express()
// puerto que va a escuchar
const PORT = 3001
// carga el pug
app.set('view engine', 'pug')
app.locals.pretty = true

app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware
app.use(session({
  secret: '.',
  name: 'ThisIsTheProjectCookie'
}))
// arranca la pagina del formulario
app.get('/', (req, res) => {
  res.render('pages/index')
})

app.get('/home', (req, res) => {
  console.log(req.session.logged + 'bla bla bla')
  res.render('pages/welcome')
})

app.post('/login', (req, res) => {
  let email = req.body.email
  let password = req.body.password
  let authentification = false
  fs.readFile('data-store/users_txt.txt', 'utf-8', (err, data) => {
    console.log(data)
    if (err) throw err
    const aUsers = data.split('\r\n')
    aUsers.forEach(function (str) {
      const aInfoUser = str.split(':')
      const usersEmail = aInfoUser[0]
      const usersPassword = aInfoUser[1]
      if (email === aInfoUser[0] && password === aInfoUser[1]) {
        console.log('condicion comparación')
        authentification = true
        console.log('bla bla bla')
      }
    })
    if (authentification = true) {
      console.log('hola estoy en autentification')
      req.session.logged = true
      res.redirect('/home')
    }
  })
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)

//
// app.use((req, res) => {
//   req.session.visits = req.session.visit ? req.session.visit++ : 1
// })
