const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // 将 /api/* 的请求代理到后端服务器
  server.use('/api', createProxyMiddleware({
    target: 'http://localhost:26659',
    changeOrigin: true,
    pathRewrite: { '^/api': '/' },
  }));

  server.all('*', (req, res) => handle(req, res));

  server.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
