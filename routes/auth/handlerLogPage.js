// arranca la pagina del formulario
function handlerLogPage (req, res) {
  if (req.session.logged) {
    res.redirect('/to-do')
  } else {
    res.redirect('/login')
  }
}
module.exports = handlerLogPage
