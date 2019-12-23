const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("./data/db.json");
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.get("/calificacion", (req, res) => {
  res.jsonp({
    calificacion: Math.floor(Math.random() * (100 - 0)) + 0
  });
});

server.use(jsonServer.bodyParser);
// Use default router
server.use(router);
server.listen(3004, () => {
  console.log("JSON Server is running");
});
