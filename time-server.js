const net = require('net')
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i
  }
  function now() {
    const date = new Date()
    return `${date.getFullYear()}-${zeroFill(date.getMonth() + 1)}-${zeroFill(date.getDate())} ${zeroFill(date.getHours())}:${zeroFill(date.getMinutes())}`
  }
  const server = net.createServer((socket) => {
    socket.end(now() + '\n');
  });

  server.listen(Number(process.argv[2]));
