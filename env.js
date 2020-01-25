const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  DATABASE_URL: process.env.DATABASE_URL,
  DB_CLIENT: process.env.DB_CLIENT,
}
