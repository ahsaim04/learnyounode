const http = require('http');
const url = require('url');


const getParsedTime = (time) => ({
  hour: time.getHours(),
  minute: time.getMinutes(),
  second: time.getSeconds()
});

const getUnixTime = (time) => ({
  unixtime: time.getTime()
});

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const time = new Date(parsedUrl.query.iso);
  let result;

  if (parsedUrl.pathname === '/api/parsetime') {
    result = getParsedTime(time);
  } else if (parsedUrl.pathname === '/api/unixtime') {
    result = getUnixTime(time);
  }

  if (result) {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(result));
  } else {
    res.writeHead(404);
    res.end();
  }
});


server.listen(Number(process.argv[2]));
