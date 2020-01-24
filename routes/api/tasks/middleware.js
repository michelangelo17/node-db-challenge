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
    throw new Error('Missing project data')
  }
}

module.exports = { valTaskPost }
