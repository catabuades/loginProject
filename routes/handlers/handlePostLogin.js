const fs = require('fs')

function handlePostLogin (req, res) {
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
      if (email === usersEmail && password === usersPassword) {
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
}

module.exports = handlePostLogin
