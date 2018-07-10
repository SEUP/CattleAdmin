'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  // test - server
  // API_URL : '"http://10.94.3.127:10002"',
  // CLIENT_ID : '5',
  // CLIENT_SECRET : '"rcbRlgZjkk3zJMfhYITKK4EMTCh1rBnBcYgNaJiq"'

  //online - server
  API_URL: '"http://localhost:10002"',
  CLIENT_ID : '8',
  CLIENT_SECRET : '"sGtSeZdxfjHmto8FVdDxG0kTK2b3JYWJtfVaKgOL"'

})
