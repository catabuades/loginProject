const fs = require('fs')

function handlePostSignIn (req, res) {
  let email = req.body.email
  let password = req.body.password

  fs.appendFile('data-store/users_txt.txt', '\r\n' + email + ':' + password, 'utf-8', (err) => {
    if (err) throw err
    res.redirect('/home')
  })
}

module.exports = handlePostSignIn
