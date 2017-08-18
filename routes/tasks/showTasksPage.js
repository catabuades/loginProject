function showTasksPage (req, res) {
  res.render('pages/tasks/index', {tasks: req.session.tasks, completed: req.session.completed})
}

module.exports = showTasksPage
