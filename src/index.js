var http = require("http");
const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  const pathName = req.url

  if (pathName === '/welcome') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Welcome to Dominos!')
  } else if (pathName === '/contact') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.write(JSON.stringify({ phone: '18602100000', email: 'guestcaredominos@jublfood.com' }));
    res.end();
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Error 404 Page not found')
  }
}

httpServer.listen(8081, () => {
  console.log('Server is listening to port 8080')
})

module.exports = httpServer;