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
 


var homeRouter = require('./app/routes/home.router')


app.use('/',homeRouter);
app.use('/about',homeRouter)

app.listen(3000, 'localhost', function() {
    console.log("listening on http://localhost:3000");
});