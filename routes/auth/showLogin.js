function showLogin (req, res) {
  res.render('pages/auth/login', {tasks: req.session.tasks})
}

module.exports = showLogin
