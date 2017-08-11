// modulos que se requieren
const fs = require('fs')
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const session = require('cookie-session')
// arranca express
const app = express()
// puerto que va a escuchar
const PORT = 3001
// carga el pug
app.set('view engine', 'pug')
app.locals.pretty = true
// middleware que sirve para encontrar los archivos estaticos en la ruta de partida public
app.use(express.static(path.join(__dirname, 'public')))

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// middleware
app.use(session({
  secret: 'holaQueAse',
  name: 'ThisIsTheProjectCookie'
}))
// arranca la pagina del formulario
app.get('/login', (req, res) => {
  if (req.session.logged === false) {
    res.render('pages/login')
  } else {
    res.render('pages/welcome')
  }
})

app.get('/home', (req, res) => {
  res.render('pages/welcome')
})

app.get('/error', (req, res) => {
  res.render('pages/error')
})

app.get('/register', (req, res) => {
  res.render('pages/register')
})

// les variables 'let' son les que es podran modificar y las 'const' les que no canviaran
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
    if (authentification) {
      console.log('hola estoy en autentification')
      req.session.logged = true
      res.redirect('/home')
    } else {
      res.redirect('/error')
    }
  })
})

app.post('/sign-in', (req, res) => {
  let email = req.body.email
  let password = req.body.password

  fs.appendFile('data-store/users_txt.txt', '\r\n' + email + ':' + password, 'utf-8', (err) => {
    if (err) throw err
    res.redirect('/home')
  })
})

app.get('/logout', (req, res) => {
  req.session.logged = false
  res.redirect('/login')
})

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)

//
// app.use((req, res) => {
//   req.session.visits = req.session.visit ? req.session.visit++ : 1
// })

// npm devtool
// para arrancar-lo: devtool app.js --watch
