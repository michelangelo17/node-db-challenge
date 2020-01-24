exports.up = knex =>
  knex.schema
    .createTable('projects', table => {
      table.increments('project_id')
      table
        .text('name')
        .notNullable()
        .unique()
        .index()
      table.text('description')
      table
        .boolean('completed')
        .defaultTo(false)
        .notNullable()
    })
    .createTable('resources', table => {
      table.increments('resource_id')
      table
        .text('name')
        .notNullable()
        .unique()
        .index()
      table.text('description')
    })
    .createTable('contexts', table => {
      table.increments('context_id')
      table.text('name')
    })
    .createTable('tasks', table => {
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
    .createTable('project_resource', table => {
      table.increments('project_resource_id')
      table
        .integer('project_id')
        .unsigned()
        .references('projects.project_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('resource_id')
        .unsigned()
        .references('resources.resource_id')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
    })
    .createTable('task_context', table => {
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
    })

exports.down = knex =>
  knex.schema
    .dropTableIfExists('task_context')
    .dropTableIfExists('project_resource')
    .dropTableIfExists('tasks')
    .dropTableIfExists('contexts')
    .dropTableIfExists('resources')
    .dropTableIfExists('projects')
