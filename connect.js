let mysql = require('mysql')

let con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '24526722',
    database: 'todoapp',
    insecureAuth: true
});


// connect 
// con.connect(function(err) {
//     if(err) {
//         return console.error('error:' + err.message)
//     }

//     console.log('Connect to the mysql server! Success connnected');
// });
// connect 

// create database
// con.connect(function(err){
//     if(err) throw err;
//     console.log('Connected');
//     con.query("create database todoapp", function (err, result){
//         if(err) throw err;
//         console.log("Database created");
//     })
// })
// create database


// create table
// con.connect(function(err){
//     if(err) throw err;
//     console.log('Connected');
//     var sql = "create table customers(name varchar(255), address varchar(255))";
//     con.query(sql, function(err,result){
//         if(err) throw err;
//         console.log("Table created");
//     });
// });


// con.connect(function(err){
//     if(err) throw err;
//     console.log('Connected');
//     var sql = "create table restaurant(name varchar(255), address varchar(255))";
//     con.query(sql, function(err,result){
//         if(err) throw err;
//         console.log("Table created");
//     });
// });


// create table have id primary key

// con.connect(function(err) {
//     if(err) throw err;
//     console.log("connected");
//     var sql ="create table student (id int auto_increment primary key, name varchar(255), age int, address varchar(255))";
//     con.query(sql, function(err,result){
//         if(err) throw err;
//         console.log("Table student created");
//     })
// })
// create table

//alter tabele 
    // con.connect(function(err) {
    //     if(err) throw err;
    //     console.log("connected");
    //     var sql = "alter table restaurant add column id int auto_increment primary key";
    //     con.query(sql, function(err, result){
    //         if(err) throw err;
    //         console.log("Table altered");
    //     })
    // })
//alter table

// insert table
// con.connect(function(err){
//     if(err) throw err;
//     console.log("connected");
//     var sql = "insert into customers(name, address) values ('Samsung','Seoul,Korea')";
//     con.query(sql, function(err,result){
//         if(err) throw err;
//         console.log("1 record inserted");
//     })
// })

// con.connect(function (err) {
//     if(err) throw err;
//     console.log("connected !");
//     var sql = "insert into restaurant(id,name,address) values ?";
//     var values = [
//         [1,'John', 'Highway 71'],
//         [2,'Peter', 'Lowstreet 4'],
//         [3,'Amy', 'Apple st 652'],
//         [4,'Hannah', 'Mountain 21'],
//         [5,'Michael', 'Valley 345'],
//         [6,'Sandy', 'Ocean blvd 2'],
//         [7,'Betty', 'Green Grass 1'],
//         [8,'Richard', 'Sky st 331'],
//         [9,'Susan', 'One way 98'],
//         [10,'Vicky', 'Yellow Garden 2'],
//         [11,'Ben', 'Park Lane 38'],
//         [12,'William', 'Central st 954'],
//         [13,'Chuck', 'Main Road 989'],
//         [14,'Viola', 'Sideway 1633']
//     ];
//     con.query(sql,[values], function (err,result) {
//         if(err) throw err;
//         console.log("number of records inserted:" + result.affectedRows);
//     })
// })

// con.connect(function(err) {
//     if (err) throw err;
//     var sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
//     con.query(sql, function (err, result) {
//       if (err) throw err;
//       console.log("1 record inserted, ID: " + result.insertId);
//     });
//   });
// insert table