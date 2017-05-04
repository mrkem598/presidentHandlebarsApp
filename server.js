// Dependencies
//express
var express = require("express");
//express handlebars
var exphbs = require("express-handlebars");
//Create the instance of the express app
var app = express();
//Specify the port
var port = 5000;
// Set Handlebars as the default templating engine
app.engine("handlebars", exphbs({defaultLayout: "main" }));
app.set("view engine", "handlebars");
//Data
var presidents = [
  {
    president: "Barak Hussein Obama is born August 4, 1961 is an American politician who served as the 44th President of the United States from 2009 to 2017. He is the first African American to have served as president";
  },
  {
    presiden: "Donald Trump (born 1946), American businessman, television personality, and the 45th and current President of the United States";
  }
  ];
// Routes
app.get("/obama", function(req, res) {
  res.render("index", presidents[0]);
});
app.get("/trump", function(req, res) {
  res.render("index", presidents[1]);
});
app.get("/presidents", function(req, res) {
  res.render("american_presidents", {
    obama: president,
    citizen: "US"
  });
});
//INITIATE THE listener
app.listen(port);
    
