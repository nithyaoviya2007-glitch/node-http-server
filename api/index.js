
module.exports = (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host}`);
  const path = url.pathname;

  if (path === "/" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>My Node.js Server</title>
          <style>
            body {
              font-family: Arial, sans-serif;
              background: #101827;
              color: white;
              text-align: center;
              padding: 60px 20px;
            }
            .card {
              max-width: 600px;
              margin: auto;
              padding: 30px;
              background: #1e293b;
              border-radius: 15px;
            }
            h1 { color: #68e0a0; }
            a { color: #8ab4ff; margin: 10px; }
          </style>
        </head>
        <body>
          <div class="card">
            <h1>Welcome to My Node.js Server!</h1>
            <p>Your server is deployed successfully on Vercel.</p>
            <a href="/about">About</a>
            <a href="/services">Services</a>
            <a href="/api">API</a>
          </div>
        </body>
      </html>
    `);
  }

  if (path === "/about" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(
      '<h1>About Us</h1><p>A basic Node.js HTTP server.</p><a href="/">Home</a>'
    );
  }

  if (path === "/services" && req.method === "GET") {
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    return res.status(200).send(
      '<h1>Our Services</h1><p>Web development, APIs, and server programming.</p><a href="/">Home</a>'
    );
  }

  if (path === "/api" && req.method === "GET") {
    res.setHeader("Content-Type", "application/json");
    return res.status(200).json({
      message: "Hello from Node.js!",
      status: "success",
      server: "Vercel"
    });
  }

  return res.status(404).json({
    error: "404 - Page Not Found",
    path
  });
};
