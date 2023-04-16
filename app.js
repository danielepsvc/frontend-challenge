const express = require("express");
const app = express();
const path = require("path");

// set the view engine to ejs
app.set('view engine', 'ejs');

app.use('/src', express.static(path.join(__dirname, "./src")));

// Render Home page
const homeRoute = require("./pages/home.js");
app.get('/', homeRoute);
app.get('/home', homeRoute);


// Render Room page
const roomRoute = require("./pages/room.js");
app.get('/room', roomRoute);



app.listen(8080);
console.log('Server is listening on port 8080');