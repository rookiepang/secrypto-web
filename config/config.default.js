const fs = require('fs')
const path = require('path')
require('dotenv').config()
module.exports = appInfo => {
  const config = (exports = {})

  config.keys = appInfo.name + '_1529805503183_9384'

  config.middleware = ['historyApi', 'compress']
  config.security = {
    csrf: false
  }

  config.siteFile = {
    '/favicon.ico': fs.readFileSync(path.join(__dirname, '../app/public/favicon.ico'))
  }

  config.static = {
    prefix: '/',
    gzip: true
  }

  config.compress = {
    threshold: 1024
  }

  return config
}
