const { DATABASE_URL } = require('./env')

module.exports = {
  development: {
    client: 'pg',
    connection: DATABASE_URL,
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
