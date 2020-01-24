const db = require('../../../data/dbConfig')

const getProjects = () => db('projects')

module.exports = { getProjects }
