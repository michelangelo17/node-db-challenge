const db = require('../../../data/dbConfig')

const getProjects = () =>
  db
    .select('project_id AS id', 'name', 'description', 'completed')
    .from('projects')

const addProject = async projectData =>
  (
    await db('projects').insert(projectData, [
      'project_id',
      'name',
      'description',
      'completed',
    ])
  )[0]

const getProjectById = async id => {
  const project = (
    await db
      .select('project_id AS id', 'name', 'description', 'completed')
      .from('projects')
      .where('project_id', id)
  )[0]
  completeProject = {
    ...project,
    tasks: await db
      .select('task_id AS id', 'description', 'notes', 'completed')
      .from('tasks')
      .where('project_id', id),
    resources: await db
      .select('r.resource_id AS id', 'name', 'description')
      .from('resources AS r')
      .innerJoin('project_resource AS pr', 'r.resource_id', 'pr.resource_id')
      .where('pr.project_id', id),
  }
  return completeProject
}

const updateProject = async (id, projectData) =>
  (
    await db('projects')
      .where('project_id', id)
      .update(projectData, ['project_id', 'name', 'description', 'completed'])
  )[0]

const deleteProject = async id => {
  const deleted = (await db('projects').where('project_id', id))[0]
  await db('projects')
    .where('project_id', id)
    .del()
  return deleted
}

module.exports = {
  getProjects,
  addProject,
  getProjectById,
  updateProject,
  deleteProject,
}
