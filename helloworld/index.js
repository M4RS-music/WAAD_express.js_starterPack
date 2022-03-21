const express =  require('express');
const app = express();


app.use(express.json());

app.get('/', (req, res) => { //READ (SELECT *)
    res.send('HELLO WORLD');

})

app.use((req, res, next) => {
  res.status(404).send("NOT FOUND");
})

app.listen(3000, () => {
  console.log("server running");
})
