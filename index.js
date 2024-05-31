const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Express on Vercel"));

app.listen(3000, () => console.log("Server ready on port 3000."));

module.exports = app;

// import http from 'http';
// var express = require('express');
// var jsonServer = require('json-server');

// var server = express();
// server.use('/api', jsonServer.router('db.json'));
// server.listen(3000)
// //http.createServer(server).listen(300);
// module.exports = server;
// ...

// You may want to mount JSON Server on a specific end-point, for example /api
// Optiona,l except if you want to have JSON Server defaults
// server.use('/api', jsonServer.defaults()); 

//server.listen(3000);


// import http from 'http';
//  const jsonServer = require('json-server')
// const server = jsonServer.create()
// const router = jsonServer.router('db.json')
// const middlewares = jsonServer.defaults()
// // Create a server object
// const _server = http.createServer(ser);
 
// // Define the port to listen on
// const port = 3000;
 
// // Start the server
// server.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

// // const jsonServer = require('json-server')
// // const server = jsonServer.create()
// // const router = jsonServer.router('db.json')
// // const middlewares = jsonServer.defaults()

// // server.use(middlewares)
// // // server.use((req, res, next) => {
// // //  if (isAuthorized(req)) { // add your authorization logic here
// // //    next() // continue to JSON Server router
// // //  } else {
// // //    res.sendStatus(401)
// // //  }
// // // })
// // // server.use(jsonServer.rewriter({
// // //     '/api/*': '/$1'  
// // // }))
// // server.use(router)
// // server.listen(3000, () => {
// //   console.log('JSON Server is running','http://localhost:'+3000)
// // })