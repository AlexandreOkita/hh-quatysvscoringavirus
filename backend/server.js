const http = require('http');


const port = process.env.PORT  || 3300;
const server = http.createServer(() => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
server.listen(port)
