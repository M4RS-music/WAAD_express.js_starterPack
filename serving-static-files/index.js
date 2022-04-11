const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.use(express.json()); //ENABLE USE OF JSON
app.use(express.static('public')); // ENABLE SERVING OF STATIC FILES FROM ./public


app.get('/', (req, res) => {
  res.sendFile('test.html', { root: 'public' }); //Send file test.html from dir public
})


app.use((req, res, next) => { //Send 404 not found if url doesnt exist
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => { //Run server on port 3000
  console.log("server running");
})
