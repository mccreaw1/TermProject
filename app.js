'use sctrict';
const http = require('http');

const fs = require('fs');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  const myReadStream = fs.createReadStream(__dirname + '/index.html','utf8');
  myReadStream.pipe(res);
})

server.listen(process.env.PORT || 3000)
console.log('Server listening on port 3000');