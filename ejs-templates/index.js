const express =  require('express'); //Require the use of express.js library
const app = express(); //Initialize server

app.set("view engine", "ejs"); //Tell server to use ejs template engine

app.get("/", function (req, res) { //Render the index template
  res.render("index"); //Renders ejs template at ./views/index
});

app.get("/about", function (req, res) { //Render the about template
  res.render("about", {
      variab: 'This is a variable that was passed from express js to the teplate'}
); //Renders ejs template at ./views/about and passes the variables stored in the object to the template for use

app.listen(8080, function () {
  console.log("Server is running on port 8080 ");
});
