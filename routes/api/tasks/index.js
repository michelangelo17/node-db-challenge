const router = require('express-promise-router')()
const db = require('./model')
const { valTaskPost } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const tasks = await db.getTasks()
  res.json(tasks)
})

router.post('/', valTaskPost, async (req, res) => {
  const addedTask = await db.addTask(req.body)
  res.status(201).json(addedTask)
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
