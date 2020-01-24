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

module.exports = { valResourcePost }
