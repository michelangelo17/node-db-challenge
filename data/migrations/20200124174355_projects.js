exports.up = knex =>
  knex.schema.createTable('projects', table => {
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

exports.down = knex => knex.schema.dropTableIfExists('projects')
