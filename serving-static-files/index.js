const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON
app.use(express.static('public')); // ENABLE SERVING OF STATIC FILES FROM ./public
//That means that anyone who types in localhost:3000/test will access the test html
//It makes the public dir the root in a sense


app.get('/', (req, res) => {

})


app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
