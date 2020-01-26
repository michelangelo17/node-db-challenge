const router = require('express-promise-router')()
const db = require('./model')
const { valContextPost, valId, valContextPut } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const contexts = await db.getContexts()
  res.json(contexts)
})

router.post('/', valContextPost, async (req, res) => {
  const addedContext = await db.addContext(req.body)
  res.status(201).json(addedContext)
})

router.get('/:id', valId, async (req, res) => {
  const context = await db.getContextById(req.params.id)
  res.json(context)
})

router.put('/:id', valId, valContextPut, async (req, res) => {
  const updated = await db.updateContext(req.params.id, req.body)
  res.json(updated)
})

router.delete('/:id', valId, async (req, res) => {
  const deleted = await db.deleteContext(req.params.id)
  res.json({ removed: deleted })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
