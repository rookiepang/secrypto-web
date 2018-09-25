module.exports = () => {
  return async function auth (ctx, next) {
    if (ctx.url.substr(0, 4) === '/api' && !ctx.isAuthenticated()) {
      ctx.status = 401
      return
    }
    await next()
  }
}
