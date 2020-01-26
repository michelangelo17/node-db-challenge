exports.up = knex =>
  knex.schema.createTable('resources', table => {
    table.increments('resource_id')
    table
      .text('name')
      .notNullable()
      .unique()
      .index()
    table.text('description')
  })

exports.down = knex => knex.schema.dropTableIfExists('resources')
