// dependencies
var express = require("express");
var express = require("body-parser");
var express = require("mysql");

var app = express();

// set up the server that is applicable for Heroku
var PORT = process.env.PORT || 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var mysql = require("mysql");

// connect the server to sql
var connection = mysql.createConnection( {
    host:"localhost",
    port: 3306,
    user:"root",
    password: "root",
    database: "burger_db"
});

connection.connect(function(err) {
    if (err) {
        console.err("error connecting to: " + err.stack);
    return;
    }

    console.log("Connected as id " + connection.threadId);
});



app.listen(PORT , function() {
    console.log("Server is currently listening on: " + PORT);
});