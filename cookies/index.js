const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server
const cookieParser = require('cookie-parser'); //Require the use of cookie-parser

app.use(cookieParser()); //Use cookies

var privateValue = null;

app.get('/getCookie', function(req, res){
   res.cookie('name', 'hellowworld', {expire: 600000 + Date.now(),
                                      allowedToPost: true}).send('cookie set');
   //Sets cookie with name hellowworld that expires after 60000ms that has a value called allowedToPost
});

app.get('/removeCookie', function(req, res){
   res.clearCookie('hellowworld'); //Clear the cookie with name hellowworld
   res.send('hellowworld cookie cleare');
});

app.post('/setPrivateValue', function(req, res){
  var allowedToPost = req.cookies.hellowworld.allowedToPost; //Access cookie value
  if (allowedToPost) {
    privateValue = 1;

  }
});

app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
