var express = require("express");

var app = express();

app.set('view engine','pug');

app.use(express.static('assets'));

app.get("/",function(req,res){

    res.render("layout");

});

app.listen(8080);
