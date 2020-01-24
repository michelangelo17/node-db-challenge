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
  const resource = await db('resources').where('resource_id', req.params.id)
  if (resource.length === 0) {
    throw new Error('Invalid resource id')
  }
  next()
}

const valResourcePut = (req, res, next) => {
  const r = req.body
  if (JSON.stringify(r) === '{}') {
    throw new Error('Missing resource data')
  }
  if (r.name || r.description) {
    next()
  } else {
    throw new Error(
      'needs 1 or more of the following fields: name, description'
    )
  }
}

module.exports = { valResourcePost, valId, valResourcePut }
