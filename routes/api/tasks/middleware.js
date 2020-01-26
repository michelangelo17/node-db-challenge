const db = require('../../../data/dbConfig')

const valTaskPost = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}') {
    throw new Error('Missing task data')
  }
  if (!req.body.description) {
    throw new Error('Missing task description')
  }
  if (!req.body.project_id) {
    throw new Error('Missing project_id')
  }
  next()
}

const valId = async (req, res, next) => {
  const task = await db('tasks').where('task_id', req.params.id)
  if (task.length === 0) {
    throw new Error('Invalid task id')
  }
  next()
}

const valTaskPut = (req, res, next) => {
  const t = req.body
  if (JSON.stringify(t) === '{}') {
    throw new Error('Missing task data')
  }
  if (t.notes || t.description || t.completed) {
    next()
  } else {
    throw new Error(
      'needs 1 or more of the following fields: name, description'
    )
  }
}

module.exports = { valTaskPost, valId, valTaskPut }
