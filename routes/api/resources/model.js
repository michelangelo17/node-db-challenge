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

const getResourceById = async id =>
  (await db('resources').where('resource_id', id))[0]

const updateResource = async (id, resourceData) =>
  (
    await db('resources')
      .where('resource_id', id)
      .update(resourceData, ['resource_id', 'name', 'description'])
  )[0]

const deleteResource = async id => {
  const deleted = (await db('resources').where('resource_id', id))[0]
  await db('resources')
    .where('resource_id', id)
    .del()
  return deleted
}

module.exports = {
  getResources,
  addResource,
  getResourceById,
  updateResource,
  deleteResource,
}
