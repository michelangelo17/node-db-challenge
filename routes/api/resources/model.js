const db = require('../../../data/dbConfig')

const getResources = () =>
  db.select('resource_id AS id', 'name', 'description').from('resources')

const getResourceById = async id =>
  (
    await db
      .select('resource_id AS id', 'name', 'description')
      .from('resources')
      .where('resource_id', id)
  )[0]

// not exported
const connectResourceToProject = async (pid, rid) =>
  await db('project_resource').insert(
    {
      project_id: pid,
      resource_id: rid,
    },
    ['project_id']
  )

// not exported
const addResourceWithPid = async rd => {
  // add resource and return resource id
  const { resource_id } = (
    await db('resources').insert(
      {
        name: rd.name,
        description: rd.description,
      },
      ['resource_id']
    )
  )[0]
  // connect resource to project
  await connectResourceToProject(rd.project_id, resource_id)
  // create and return object with value of project resource connected to
  return {
    ...(await getResourceById(resource_id)),
    connectedToProject: rd.project_id,
  }
}

// not exported
const updateResourceWithPid = async (id, rd) => {
  await connectResourceToProject(rd.project_id, id)
  if (rd.name || rd.description) {
    const updated = (
      await db('resources')
        .where('resource_id', id)
        .update(
          { name: rd.name, description: rd.description }[
            ('resource_id AS id', 'name', 'description')
          ]
        )
    )[0]
    return { ...updated, connectedToProject: rd.project_id }
  }
  return { ...(await getResourceById(id)), connectedToProject: rd.project_id }
}

const addResource = async rd => {
  if (rd.project_id) {
    return await addResourceWithPid(rd)
  }
  return (
    await db('resources').insert(rd, ['resource_id', 'name', 'description'])
  )[0]
}

const updateResource = async (id, rd) => {
  if (rd.project_id) {
    return await updateResourceWithPid(id, rd)
  }
  return (
    await db('resources')
      .where('resource_id', id)
      .update(rd, ['resource_id', 'name', 'description'])
  )[0]
}
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
