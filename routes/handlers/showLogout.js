function showLogout (req, res) {
  req.session.logged = false
  res.redirect('/login')
}

module.exports = showLogout
