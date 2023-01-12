// var http = require('http');

// var server = http.createServer(function (req,res){
//     res.setHeader("Content-Type","application/json");
//     res.end("<h1>Hello World</h1>");
// })

// server.listen(3000, function() {
//     console.log("Server listening on http://localhost:3000");
// })
const express = require('express')
const app = express();
 


require('./app/routes/home.router')(app)
 require('./app/routes/book.router')(app)



app.listen(3000, 'localhost', function() {
    console.log("Server listening on http://localhost:3000");
});