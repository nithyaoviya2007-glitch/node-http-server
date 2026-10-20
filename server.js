
const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  // Send an HTML response
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (req.url === "/" && req.method === "GET") {
    res.statusCode = 200;
    res.end(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Node.js Server</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              text-align: center;
              background: #101827;
              color: white;
              padding: 60px 20px;
            }
            h1 { color: #68e0a0; }
            a {
              color: #8ab4ff;
              margin: 10px;
              display: inline-block;
            }
            .card {
              max-width: 600px;
              margin: 25px auto;
              padding: 25px;
              background: #1e293b;
              border-radius: 15px;
            }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Welcome to My Node.js Server!</h1>
            <p>Your HTTP server is running successfully.</p>
            <p>Built using Node.js and its built-in HTTP module.</p>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/api">API</a>
          </div>
        </body>
      </html>
    `);
  } else if (req.url === "/about" && req.method === "GET") {
    res.statusCode = 200;
    res.end(`
      <h1>About Us</h1>
      <p>This website is powered by a basic Node.js HTTP server.</p>
      <a href="/">Back to Home</a>
    `);
  } else if (req.url === "/services" && req.method === "GET") {
    res.statusCode = 200;
    res.end(`
      <h1>Our Services</h1>
      <ul>
        <li>Web Development</li>
        <li>API Development</li>
        <li>Server-side Programming</li>
      </ul>
      <a href="/">Back to Home</a>
    `);
  } else if (req.url === "/api" && req.method === "GET") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end(JSON.stringify({
      message: "Hello from Node.js!",
      status: "success",
      server: "HTTP Server"
    }));
  } else {
    res.statusCode = 404;
    res.end(`
      <h1>404 - Page Not Found</h1>
      <p>The requested URL does not exist.</p>
      <a href="/">Back to Home</a>
    `);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
