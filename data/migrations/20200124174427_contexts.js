exports.up = knex =>
  knex.schema.createTable('contexts', table => {
    table.increments('context_id')
    table.text('name').unique()
  })

exports.down = knex => knex.schema.dropTableIfExists('contexts')
