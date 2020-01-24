const router = require('express-promise-router')()
const db = require('./model')
const { valTaskPost, valId, valTaskPut } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const tasks = await db.getTasks()
  res.json(tasks)
})

router.post('/', valTaskPost, async (req, res) => {
  const addedTask = await db.addTask(req.body)
  res.status(201).json(addedTask)
})

router.get('/:id', valId, async (req, res) => {
  const task = await db.getTaskById(req.params.id)
  res.json(task)
})

router.put('/:id', valId, valTaskPut, async (req, res) => {
  const updated = await db.updateTask(req.params.id, req.body)
  res.json(updated)
})

router.delete('/:id', valId, async (req, res) => {
  const deleted = await db.deleteTask(req.params.id)
  res.json({ removed: deleted })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
