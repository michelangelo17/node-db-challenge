const db = require('./model')

const valResourcePost = (req, res, next) => {
  if (JSON.stringify(req.body) === '{}') {
    throw new Error('Missing resource data')
  }
  if (!req.body.name) {
    throw new Error('Missing resource name')
  }
  next()
}

const valId = async (req, res, next) => {
  const resource = await db.getResourceById(req.params.id)
  if (!resource) {
    throw new Error('Invalid resource id')
  }
  next()
}

const valResourcePut = (req, res, next) => {
  const r = req.body
  if (JSON.stringify(r) === '{}') {
    throw new Error('Missing resource data')
  }
  if (r.name || r.description || r.project_id) {
    next()
  } else {
    throw new Error(
      'needs 1 or more of the following fields: name, description, project_id'
    )
  }
}

module.exports = { valResourcePost, valId, valResourcePut }
