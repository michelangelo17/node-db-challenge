const { DB_URL, DATABASE_URL, client } = require('./env')

module.exports = {
  development: {
    client: 'pg',
    connection: DB_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
  production: {
    client: client,
    connection: DATABASE_URL,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
}
