const db = require('../../../data/dbConfig')

const valProjectPost = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}') {
    throw new Error('Missing project data')
  }
  if (!req.body.name) {
    throw new Error('Missing project name')
  }
  next()
}

const valId = async (req, res, next) => {
  const project = await db('projects').where('project_id', req.params.id)
  if (project.length === 0) {
    throw new Error('Invalid project id')
  }
  next()
}

const valProjectPut = (req, res, next) => {
  const p = req.body
  if (JSON.stringify(p) === '{}') {
    throw new Error('Missing project data')
  }
  if (p.name || p.description || p.completed) {
    next()
  } else {
    throw new Error(
      'needs 1 or more of the following fields: name, description, completed'
    )
  }
}

module.exports = { valProjectPost, valId, valProjectPut }
