const fs = require('fs')
const path = require('path')
const util = require('util')
const Controller = require('egg').Controller

const readFileAsync = util.promisify(fs.readFile)

class HomeController extends Controller {
  async index (ctx) {
    const content = await readFileAsync(path.join(__dirname, '../index.html'), 'utf-8')
    ctx.body = content
  }
}

module.exports = HomeController
