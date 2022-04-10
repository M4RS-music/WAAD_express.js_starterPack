const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON

var test = 'test';
var usernames = ['m4rs', 'david95', 'arthur42'];
var passwords = ['123', 'password', 'theanswer'];


app.get('/usernames', (req, res) => { //Get a list of all usernames
    res.json(usernames); //Respond with json array of usernames
})


app.post('/newuser', (req, res) => { //Post a new user to the system
  if(req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){ //Check if the query contains properties
    let result = { //Retrieve values from body json
      username: req.body.username, //Access post query
      pass: req.body.password,
      }

    let reply = { //Generate a json reply
      uploadedPassword: 'SUCCESS',
      forUser: result.username,
      atIndex: usernames.length
    }

      usernames.push(result.username);//Upload new user data
      passwords.push(result.password);
      res.status(200).json(reply); //Send json reply

  }
})


app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
