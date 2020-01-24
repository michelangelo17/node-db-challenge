const db = require('../../../data/dbConfig')

const valResourcePost = (req, res, next) => {
  if (JSON.stringify(req.body) !== '{}') {
    if (req.body.name) {
      next()
    } else {
      throw new Error('Missing resource name')
    }
  } else {
    throw new Error('Missing resource data')
  }
}

const valId = async (req, res, next) => {
  const project = await db('resources').where('resource_id', req.params.id)
  if (project.length === 0) {
    throw new Error('Invalid resource id')
  }
  next()
}

const valResourcePut = (req, res, next) => {
  const p = req.body
  if (JSON.stringify(p) === '{}') {
    throw new Error('Missing resource data')
  }
  if (p.name || p.description) {
    next()
  } else {
    throw new Error(
      'needs 1 or more of the following fields: name, description'
    )
  }
}

module.exports = { valResourcePost, valId, valResourcePut }
