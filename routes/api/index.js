const router = require('express-promise-router')()
const projectsRouter = require('./projects')
const resourcesRouter = require('./resources')
const tasksRouter = require('./tasks')
const contextRouter = require('./contexts')

module.exports = [
  router.use('/projects', projectsRouter),
  router.use('/resources', resourcesRouter),
  router.use('/tasks', tasksRouter),
  router.use('/contexts', contextRouter),
]
