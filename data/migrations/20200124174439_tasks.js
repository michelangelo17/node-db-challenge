exports.up = knex =>
  knex.schema.createTable('tasks', table => {
    table.increments('task_id')
    table
      .text('description')
      .notNullable()
      .index()
    table.text('notes')
    table
      .boolean('completed')
      .defaultTo(false)
      .notNullable()
    table
      .integer('project_id')
      .unsigned()
      .references('projects.project_id')
      .onUpdate('CASCADE')
      .onDelete('CASCADE')
      .notNullable()
  })

exports.down = knex => knex.schema.dropTableIfExists('tasks')
