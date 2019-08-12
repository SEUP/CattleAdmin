'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  API_URL : '"http://10.94.1.46:3333"',
  //API_URL : '"http://mct.ict.up.ac.th:10008"',
  //API_URL : '"http://10.94.68.186:3333"',

})
