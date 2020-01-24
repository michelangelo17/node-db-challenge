const db = require('../../../data/dbConfig')

const getResources = () => db('resources')

const addResource = async resourceData =>
  (
    await db('resources').insert(resourceData, [
      'resource_id',
      'name',
      'description',
    ])
  )[0]

module.exports = { getResources, addResource }
