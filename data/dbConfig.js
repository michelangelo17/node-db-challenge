const { NODE_ENV } = require('../env')
const knex = require('knex')

const config = require('../knexfile.js')

module.exports = knex(config[NODE_ENV])
