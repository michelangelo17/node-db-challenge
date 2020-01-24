const db = require('../../../data/dbConfig')

const getProjects = () => db('projects')

const addProject = async projectData =>
  (
    await db('projects').insert(projectData, [
      'project_id',
      'name',
      'description',
      'completed',
    ])
  )[0]

module.exports = { getProjects, addProject }
