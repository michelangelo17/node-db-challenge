const router = require('express-promise-router')()
const db = require('./model')

module.exports = router

router.get('/', async (req, res) => {
  const tasks = await db.getTasks()
  res.json(tasks)
})

// if (something) {
//   throw new Error('')
// }

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
