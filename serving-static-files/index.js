const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON
app.use(express.static('public')); // ENABLE SERVING OF STATIC FILES FROM ./public


app.get('/usernames', (req, res) => { //Get a list of all usernames
    res.json(usernames); //Respond with json array of usernames
})


app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
