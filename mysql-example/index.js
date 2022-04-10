const express =  require('express');
const session = require('express-session')
const app = express();

//MYSQL SETUP
const mysql_connector = require('mysql'); //Require package that  connects to mysql
const connection = mysql_connector.createConnection({ //Define a connection
  host : 'localhost',
  user : 'root',
  password  :'m4rs.root',
  database : 'ex4_waad'
});



app.use(express.json()); //ENABLE USE OF JSON

app.use( //ENABLE SESSION VARIABLES
    session({
        secret: 'secret',
    })
);

app.get('/api/user', (req, res) => { //READ (SELECT *)
  connection.connect();
  connection.query("select * from users;", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  connection.end();
})

app.get('/api/user/:id', (req, res) => { //READ (SELECT ID)
  connection.connect();
  connection.query("select * from users where id = " + req.params.id + ";", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  connection.end();
})

app.post('/api/user/:id', (req, res) => { //CREATE (INSERT)
  //res.send('POST');
  connection.connect();
  let inters = {
    name: req.body.name,
    value: req.body.value
  }
  connection.query("INSERT INTO users VALUES (" + req.params.id + ", " + inters.name + ", "  + inters.value + ");", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  res.send('post');
  connection.end();

})

app.delete('/api/user/:id', (req, res) => { //DELETE
  connection.connect();
  connection.query("DELETE FROM table_name WHERE id = " + req.params.id + ";", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  res.send('delete');
  connection.end();
})

app.patch('/api/user/:id', (req, res) => { //UPDATE
  connection.connect();
  connection.query("UPDATE users SET value = 3 WHERE id = " + req.params.id + ";", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  res.send('patch');
  connection.end();
})

app.put('/api/user/:id', (req, res) => { //UPDATE
  connection.connect();
  connection.query("UPDATE users SET value = 3 WHERE id = " + req.params.id + ";", function(error, results){
    console.log("query response is ", results);
    res.json(results);
  })
  res.send('put');
  connection.end();
})



app.use((req, res, next) => {
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => {
  console.log("server running");
})
