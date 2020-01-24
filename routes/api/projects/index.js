const router = require('express-promise-router')()
const db = require('./model')
const { valProjectPost } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const projects = await db.getProjects()
  res.json(projects)
})

router.post('/', valProjectPost, async (req, res) => {
  const addedProject = await db.addProject(req.body)
  res.status(201).json(addedProject)
})

router.get('/:id', async (req, res) => {
  const project = await db.getProjectById(req.params.id)
  res.json(project)
})

// if (something) {
//   throw new Error('')
// }

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
