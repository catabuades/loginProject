function editTask (req, res) {
  let done
  const id = +req.params.id
  if (req.body.done === 'true') {
    done = true
  } else {
    done = false
  }
  const title = req.body.title
  req.session.tasks = req.session.tasks.map(task => {
    if (task.id === id) {
      task.done = done
      task.title = title || task.title
    }
    return task
  })
  res.send(`element w/ id ${id} has been updated`)
}

module.exports = editTask
