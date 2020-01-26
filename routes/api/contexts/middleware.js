const db = require('./model')

const valContextPost = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}') {
    throw new Error('Missing context data')
  }
  if (!req.body.name) {
    throw new Error('Missing context name')
  }
  next()
}

const valId = async (req, res, next) => {
  const context = await db.getContextById(req.params.id)
  if (!context) {
    throw new Error('Invalid context id')
  }
  next()
}

const valContextPut = (req, res, next) => {
  const c = req.body
  if (JSON.stringify(c) === '{}') {
    throw new Error('Missing context data')
  }
  if (c.name || c.task_id) {
    next()
  } else {
    throw new Error('needs 1 or more of the following fields: name, task_id')
  }
}

module.exports = { valContextPost, valId, valContextPut }
