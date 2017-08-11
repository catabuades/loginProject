// modulos que se requieren
const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const cookieSession = require('cookie-session')
// arranca express
const app = express()
// requiere buscar en routes
const routesApp = require('./routes/')
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
app.use(cookieSession({
  name: 'ThisIsTheProjectCookie',
  keys: ['jksjlfskjfeoiwjl']
}))

app.use(routesApp)

app.listen(PORT)
console.log(`Listening on PORT ${PORT}`)

/* hasta aqui iria en el app.js */

// SHOWLOGIN HANDLER
// arranca la pagina del formulario
// app.get('/login', (req, res) => {
//   if (req.session.logged === false) {
//     res.render('pages/login')
//   } else {
//     res.render('pages/welcome')
//   }
// })

// SHOWHOME HANDLER
// app.get('/home', (req, res) => {
//   res.render('pages/welcome')
// })

// SHOWERROR HANDLER
// app.get('/error', (req, res) => {
//   res.render('pages/error')
// })

// SHOWREGISTER HANDLER
// app.get('/register', (req, res) => {
//   res.render('pages/register')
// })

// HANDLEPOSTLOGIN
// les variables 'let' son les que es podran modificar y las 'const' les que no canviaran
// app.post('/login', (req, res) => {
//   let email = req.body.email
//   let password = req.body.password
//   let authentification = false
//   fs.readFile('data-store/users_txt.txt', 'utf-8', (err, data) => {
//     console.log(data)
//     if (err) throw err
//     const aUsers = data.split('\r\n')
//     aUsers.forEach(function (str) {
//       const aInfoUser = str.split(':')
//       const usersEmail = aInfoUser[0]
//       const usersPassword = aInfoUser[1]
//       if (email === aInfoUser[0] && password === aInfoUser[1]) {
//         console.log('condicion comparación')
//         authentification = true
//         console.log('bla bla bla')
//       }
//     })
//     if (authentification) {
//       console.log('hola estoy en autentification')
//       req.session.logged = true
//       res.redirect('/home')
//     } else {
//       res.redirect('/error')
//     }
//   })
// })

// HANDLEPOSTSINGIN
// app.post('/sign-in', (req, res) => {
//   let email = req.body.email
//   let password = req.body.password

//   fs.appendFile('data-store/users_txt.txt', '\r\n' + email + ':' + password, 'utf-8', (err) => {
//     if (err) throw err
//     res.redirect('/home')
//   })
// })

// SHOWLOGOUT HANDLER
// app.get('/logout', (req, res) => {
//   req.session.logged = false
//   res.redirect('/login')
// })

//
// app.use((req, res) => {
//   req.session.visits = req.session.visit ? req.session.visit++ : 1
// })

// npm devtool
// para arrancar-lo: devtool app.js --watch
