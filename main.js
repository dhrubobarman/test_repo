const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("welcome to our about page");
  }
  res.end(`
      <h1>Oops!</h1>
      <p>We cant seem to find the page you are looking for here are some links</p>
      <a href="/">home</a>
      <a href="/about">about</a>
  `);
});

server.listen(5000);
