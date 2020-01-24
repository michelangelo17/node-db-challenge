const db = require('../../../data/dbConfig')

const getTasks = () =>
  db
    .select(
      'task_id',
      't.description',
      'notes',
      't.completed',
      'name AS project_name',
      'p.description AS project_description'
    )
    .from('projects AS p')
    .innerJoin('tasks AS t', 'p.project_id', 't.project_id')
    .orderBy('p.project_id', 'task_id')

module.exports = { getTasks }
