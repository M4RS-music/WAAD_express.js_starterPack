const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON

app.get('/', (req, res) => { //Basic route for root url
  let reply = { //Generate hellow world json
    response: 'HELLO WORLD'
  }
  res.json(reply); //Respond with hello world in json

})

app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
