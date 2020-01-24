const router = require('express-promise-router')()
const db = require('./model')
const { valResourcePost, valId, valResourcePut } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const resources = await db.getResources()
  res.json(resources)
})

router.post('/', valResourcePost, async (req, res) => {
  const addedResource = await db.addResource(req.body)
  res.status(201).json(addedResource)
})

router.get('/:id', valId, async (req, res) => {
  console.log(db)
  const resource = await db.getResourceById(req.params.id)
  res.json(resource)
})

router.put('/:id', valId, valResourcePut, async (req, res) => {
  const updated = await db.updateResource(req.params.id, req.body)
  res.json(updated)
})

router.delete('/:id', valId, async (req, res) => {
  const deleted = await db.deleteResource(req.params.id)
  res.json({ removed: deleted })
})

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
