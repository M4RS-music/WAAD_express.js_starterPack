const express =  require('express');
const session = require('express-session')
const app = express();


app.use(express.json());

app.use( //Create session variable
    session({
        secret: 'secret',
    })
);

app.get('/', (req, res) => {
  res.send(`Username: ${req.session.username}`); //Get the ;username; stored in session

})

app.delete('/', (req, res) => { //Delete the username from session
  req.session.username = null;
  res.send('delete');
})

app.post('/', (req, res) => {
  //res.send('POST');

  if(req.body.hasOwnProperty('username')){
    let result = {
      username: req.body.username,
      status: true
    }

    req.session.username = result.username; //Set the session username = to the username from req
  } else{
    res.status(400).send('did not input username')
  }
  res.send('post');

})

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => {
  console.log("server running");
})
