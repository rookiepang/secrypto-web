module.exports = () => {
  return async function historyApi (ctx, next) {
    if (ctx.url.substr(0, 4) === '/api' ||
      ctx.url.substr(0, 9) === '/register' ||
      ctx.url.substr(0, 6) === '/login' ||
      ctx.url.substr(0, 7) === '/logout') {
      await next()
      return
    }
    ctx.url = '/'
    await next()
  }
}
