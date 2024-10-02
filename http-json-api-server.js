const http= require('http');
const url= require('url');

function parsetime (time) {
    return {
      hour: time.getHours(),
      minute: time.getMinutes(),
      second: time.getSeconds()
    }
  }
  
  function unixtime (time) {
    return { unixtime: time.getTime() }
  }

  const server = http.createServer(function (req, res) {
    const parsedUrl = url.parse(req.url, true);
    const pathname = parsedUrl.pathname;
    const query = parsedUrl.query;
    
    if (pathname === '/api/parsetime') {
        if (!query.iso) {
            return res.end('Error: provide an ISO date string.');
        }
        const time = new Date(query.iso);
        if (isNaN(time)) {
            return res.end('Error: invalid ISO date string.');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(parsetime(time)));
    } else if (pathname === '/api/unixtime') {
        const time = new Date(query.timestamp * 1000);
        if (isNaN(time)) {
            return res.end('Error: invalid UNIX timestamp.');
        }
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(unixtime(time)));
    } else {
        res.writeHead(404);
        res.end('Not found');
    }

    
)

server.listen(process.argv[2], function () {
  console.log('Server is listening on port'+ process.argv[2]);
});
