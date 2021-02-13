// const { createProxyMiddleware } = require('http-proxy-middleware')
//
// module.exports = (req, res) => {
//   // 创建代理对象并转发请求
//   createProxyMiddleware({
//     target: 'http://api-toutiao-web.itheima.net/mp/v1_0/user/profile',
//     changeOrigin: true,
//     pathRewrite: {
//       // 通过路径重写，去除请求路径中的 /api
//       //   例如 /api/xxx 将被转发到 http://api-toutiao-web.itheima.net/mp/v1_0/user/profile
//       '^/api/': ''
//     }
//   })(req, res)
// }
