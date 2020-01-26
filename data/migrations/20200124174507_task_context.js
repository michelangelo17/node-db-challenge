exports.up = knex =>
  knex.schema.createTable('task_context', table => {
    table.increments('task_context_id')
    table
      .integer('task_id')
      .unsigned()
      .references('tasks.task_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
    table
      .integer('context_id')
      .unsigned()
      .references('contexts.context_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
    table.unique(['task_id', 'context_id'])
  })

exports.down = knex => knex.schema.dropTableIfExists('task_context')
