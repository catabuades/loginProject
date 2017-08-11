// arranca la pagina del formulario
function showLogin (req, res) {
  if (req.session.logged === false) {
    res.render('pages/login')
  } else {
    res.render('pages/welcome')
  }
}

module.exports = showLogin
