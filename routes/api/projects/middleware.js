const valProjectPost = (req, res, next) => {
  if (JSON.stringify(req.body) !== '{}') {
    if (req.body.name) {
      next()
    } else {
      throw new Error('Missing project name')
    }
  } else {
    throw new Error('Missing project data')
  }
}

module.exports = { valProjectPost }
