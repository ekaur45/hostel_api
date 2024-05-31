import http from 'http';
 
// Create a server object
const server = http.createServer((req, res) => {
    // Set the response header
    res.writeHead(200, {'Content-Type': 'text/plain'});
    // Write some text to the response
    res.end('Welcome to my simple Node.js app!');
});
 
// Define the port to listen on
const port = 3000;
 
// Start the server
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

// const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()

// server.use(middlewares)
// // server.use((req, res, next) => {
// //  if (isAuthorized(req)) { // add your authorization logic here
// //    next() // continue to JSON Server router
// //  } else {
// //    res.sendStatus(401)
// //  }
// // })
// // server.use(jsonServer.rewriter({
// //     '/api/*': '/$1'  
// // }))
// server.use(router)
// server.listen(3000, () => {
//   console.log('JSON Server is running','http://localhost:'+3000)
// })