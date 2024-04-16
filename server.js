const http = require('http');

const port = 3000;

const mappings = {
  1: true,
  2: false,
  3: true,
  4: false
};

const server = http.createServer((req, res) => {
  const urlParts = req.url.split('/');
  const id = parseInt(urlParts[1]);

  if (urlParts.length !== 2 || isNaN(id) || id < 1 || id > 4) {
    res.writeHead(400, {'Content-Type': 'text/plain'});
    res.end('Invalid ID');
    return;
  }

  const result = mappings[id];
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end(result.toString());
});

server.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
