exports.up = knex =>
  knex.schema.createTable('contexts', table => {
    table.increments('context_id')
    table.text('name')
  })

exports.down = knex => knex.schema.dropTableIfExists('contexts')
