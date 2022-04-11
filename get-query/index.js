const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON

var test = 'test';
var usernames = ['m4rs', 'david95', 'arthur42'];
var passwords = ['123', 'password', 'theanswer'];


app.get('/usernames', (req, res) => { //Get a list of all usernames
    res.json(usernames); //Respond with json array of usernames
})


app.get('/user', (req, res) => { //Post a new user to the system
  if(req.body.hasOwnProperty('username')){ //Check if the get query contains properties
    let result = { //Retrieve values from body json
      username: req.body.username, //Access get query
      }

      if (usernames.indexOf(result.username) != -1) {
        res.send('TRUE');
      } else{
        res.send('FALSE');
      }
  }
})


app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
