const strftime = require('strftime')
let counter = 0

function createNewTask (req, res) {
  const timeCreated = 'Created at: ' + strftime('%Y-%m-%d %H:%M:%S', new Date())
  const title = req.body.task
  const newTask = {
    id: ++counter,
    title,
    done: false,
    createdAt: timeCreated
  }
  req.session.tasks.push(newTask)
  res.redirect('/to-do')
}

module.exports = createNewTask
