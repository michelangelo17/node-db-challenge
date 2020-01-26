exports.up = knex =>
  knex.schema.createTable('project_resource', table => {
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
    table.unique(['project_id', 'resource_id'])
  })

exports.down = knex => knex.schema.dropTableIfExists('project_resource')
