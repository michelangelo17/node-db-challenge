const db = require('../../../data/dbConfig')

const getTasks = () =>
  db
    .select(
      'task_id AS id',
      't.description',
      'notes',
      't.completed',
      'name AS project_name',
      'p.description AS project_description'
    )
    .from('projects AS p')
    .innerJoin('tasks AS t', 'p.project_id', 't.project_id')
    .orderBy('p.project_id', 'task_id')

const addTask = async taskData =>
  (
    await db('tasks').insert(taskData, [
      'task_id',
      'description',
      'notes',
      'completed',
      'project_id',
    ])
  )[0]

const getTaskById = async id => {
  return {
    ...(
      await db
        .select(
          'task_id AS id',
          't.description',
          'notes',
          't.completed',
          'name AS project_name',
          'p.description AS project_description'
        )
        .from('projects AS p')
        .innerJoin('tasks AS t', 'p.project_id', 't.project_id')
        .where('task_id', id)
    )[0],
    contexts: await db
      .select('c.context_id AS id', 'name')
      .from('contexts AS c')
      .innerJoin('task_context AS tc', 'tc.context_id', 'c.context_id')
      .where('tc.task_id', id),
  }
}

const updateTask = async (id, taskData) =>
  (
    await db('tasks')
      .where('task_id', id)
      .update(taskData, ['task_id', 'description', 'notes', 'completed'])
  )[0]

const deleteTask = async id => {
  const deleted = (await db('tasks').where('task_id', id))[0]
  await db('tasks')
    .where('task_id', id)
    .del()
  return deleted
}

module.exports = {
  getTasks,
  addTask,
  getTaskById,
  updateTask,
  deleteTask,
}
