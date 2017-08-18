function showLogout (req, res) {
  req.session.logged = null
  res.redirect('/login')
}

module.exports = showLogout
