//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/admin-login",function(req,res){
  res.sendFile(__dirname+"/views/admin-login.html");
});

app.post("/main",function(req,res){
  if((req.body.email==='abc@gm.com')&&(req.body.password==='abc')){
    res.sendFile(__dirname+"/views/main.html");
    console.log(token);

  }
  else{
    res.sendFile(__dirname+"/views/admin-login.html");
  }

});


app.listen(3000, function() {
  console.log("Server started on port 3000");
});
