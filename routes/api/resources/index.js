const router = require('express-promise-router')()
const db = require('./model')
const { valResourcePost } = require('./middleware')

module.exports = router

router.get('/', async (req, res) => {
  const resources = await db.getResources()
  res.json(resources)
})

router.post('/', valResourcePost, async (req, res) => {
  const addedResource = await db.addResource(req.body)
  res.status(201).json(addedResource)
})

// if (something) {
//   throw new Error('')
// }

router.use((err, req, res, next) =>
  res.status(500).json({ message: 'Uh Oh! 500 Error!', error: err.message })
)
