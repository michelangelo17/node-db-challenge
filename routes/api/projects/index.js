const router = require('express-promise-router')()
const db = require('./model')
const { valProjectPost, valId, valProjectPut } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const projects = await db.getProjects()
  res.json(projects)
})

router.post('/', valProjectPost, async (req, res) => {
  const addedProject = await db.addProject(req.body)
  res.status(201).json(addedProject)
})

router.get('/:id', valId, async (req, res) => {
  const project = await db.getProjectById(req.params.id)
  res.json(project)
})

router.put('/:id', valId, valProjectPut, async (req, res) => {
  const updated = await db.updateProject(req.params.id, req.body)
  res.json(updated)
})

router.delete('/:id', valId, async (req, res) => {
  const deleted = await db.deleteProject(req.params.id)
  res.json({ removed: deleted })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
