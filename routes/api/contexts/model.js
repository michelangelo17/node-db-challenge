const db = require('../../../data/dbConfig')

const getContexts = () => db.select('context_id AS id', 'name').from('contexts')

const getContextById = async id =>
  (
    await db
      .select('context_id AS id', 'name')
      .from('contexts')
      .where('context_id', id)
  )[0]

// not exported
const connectContextToTask = async (tid, cid) =>
  await db('task_context').insert({ task_id: tid, context_id: cid }, [
    'task_id',
  ])

// not exported
const addContextWithTid = async cd => {
  // add context and return context id
  const { context_id } = (
    await db('contexts').insert({ name: cd.name }, ['context_id'])
  )[0]
  // connect context to task
  await connectContextToTask(cd.task_id, context_id)
  // create and return object with value of task context connected to
  return {
    ...(await getContextById(context_id)),
    connectedToTask: cd.task_id,
  }
}

// not exported
const updateContextWithTid = async (id, cd) => {
  await connectContextToTask(cd.task_id, id)
  if (cd.name) {
    return {
      ...(
        await db('contexts')
          .where('context_id', id)
          .update({ name: cd.name }, ['context_id', 'name'])
      )[0],
      connectedToTask: cd.task_id,
    }
  }
  return { ...(await getContextById(id)), connectedToTask: cd.task_id }
}

const addContext = async cd => {
  if (cd.task_id) {
    return await addContextWithTid(cd)
  }
  return (await db('contexts').insert(cd, ['context_id', 'name']))[0]
}

const updateContext = async (id, cd) => {
  if (cd.task_id) {
    return await updateContextWithTid(id, cd)
  }
  return (
    await db('contexts')
      .where('context_id', id)
      .update(cd, ['context_id', 'name'])
  )[0]
}
const deleteContext = async id => {
  const deleted = (await db('contexts').where('context_id', id))[0]
  await db('contexts')
    .where('context_id', id)
    .del()
  return deleted
}

module.exports = {
  getContexts,
  addContext,
  getContextById,
  updateContext,
  deleteContext,
}
