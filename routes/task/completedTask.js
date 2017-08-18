const strftime = require('strftime')

function completedTask (req, res) {
  var timeCompleted = 'Completed at: ' + strftime('%Y-%m-%d %H:%M:%S', new Date())
  req.session.tasks.forEach((task) => {
    if (task.id === +req.params.id) {
      task.timeCompleted = timeCompleted
      req.session.completed.push(task)
    }
  })
  const id = +req.params.id
  req.session.tasks = req.session.tasks.filter(task => task.id !== id)
  res.send(`element w/ id ${id} has been removed and added to done`)
}

module.exports = completedTask
