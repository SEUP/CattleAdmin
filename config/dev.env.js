'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
   //API_URL: '"http://10.94.1.82:3333"',
  API_URL: '"http://mct.ict.up.ac.th:10008"'
})
