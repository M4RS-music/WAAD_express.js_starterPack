const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON

var test = 'test';
var usernames = ['m4rs', 'david95', 'arthur42'];
var passwords = ['123', 'password', 'theanswer'];


app.get('/usernames', (req, res) => { //Get a list of all usernames
    res.json(usernames); //Respond with json array of usernames
})

app.put('/userpass', (req, res) => { //Replace all instances of a users password
  if(req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
    let result = { //Retrieve values from body json
      username: req.body.username,
      pass: req.body.password,
      index: null
      }
    for (var i = 0; i < usernames.length; i++) { //Check if username exists
      if (usernames[i] == result.username) {
        result.index = i; //Get index of user in order to change password
      }
    }

    let reply = {
      changedPassword: 'SUCCESS',
      forUser: result.username,
      atIndex: result.index
    }
    if (result.index != null) {
      passwords[result.index] = result.password; //Update password of user
      res.status(200).json(reply);
    }
  } else{
      let reply = {
        changedPassword: 'FAILURE',
      }
      res.status(400).json(reply)
    }
})

app.post('/newuser', (req, res) => { //Post a new user to the system
  if(req.body.hasOwnProperty('username') && req.body.hasOwnProperty('password')){
    let result = { //Retrieve values from body json
      username: req.body.username,
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

app.delete('/userpass', (req, res) => { //Delete user data based on username
  if(req.body.hasOwnProperty('username')){
    let result = { //Retrieve values from body json
      username: req.body.username,
      index: null
      }
    for (var i = 0; i < usernames.length; i++) { //Check if username exists
      if (usernames[i] == result.username) {
        result.index = i; //Get index of user in order to change password
      }
    }

    let reply = {
      removedUser: 'SUCCESS',
      forUser: result.username,
      atIndex: result.index
    }
    if (result.index != null) { //Remove daya of user
      usernames[result.index] = null;
      passwords[result.index] = null;
      res.status(200).json(reply);
    }
  } else{
      let reply = {
        changedPassword: 'FAILURE',
      }
      res.status(400).json(reply)
    }
})

app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
