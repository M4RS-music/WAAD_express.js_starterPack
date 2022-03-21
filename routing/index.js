const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server
const routes = require('./routes') //Require the use of the routes.js file

app.use('/', routes); //Use the routes in routes.js

app.get('/', (req, res) => { //Basic route for root url
    res.send('HELLO WORLD'); //Respond with hello world

})

app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
