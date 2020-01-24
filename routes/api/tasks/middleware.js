const db = require('../../../data/dbConfig')

const valTaskPost = (req, res, next) => {
  if (JSON.stringify(req.body) !== '{}') {
    if (req.body.description) {
      if (req.body.project_id) {
        next()
      } else {
        throw new Error('Missing project_id')
      }
    } else {
      throw new Error('Missing task description')
    }
  } else {
    throw new Error('Missing task data')
  }
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
