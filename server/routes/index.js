var express = require ("express");
var router = express.Router();
var path = require("path");
var subtrac = require("./calculate.js");
var x = 0;
var y = 0;
var answer = "";

router.post("/subtrac", function(req,res){
    x = parseFloat(req.body.x);
    y = parseFloat(req.body.y);
    answer = (x - y).toString();
    res.send(answer);

});

router.post("/add", function(req,res){
    x = parseFloat(req.body.x);
    y = parseFloat(req.body.y);
    answer = (x + y).toString();
    res.send(answer);

});

router.post("/multiply", function(req,res){
    x = parseFloat(req.body.x);
    y = parseFloat(req.body.y);
    answer = (x * y).toString();
    res.send(answer);

});

router.post("/divide", function(req,res){
    x = parseFloat(req.body.x);
    y = parseFloat(req.body.y);
    answer = (x / y).toString();
    res.send(answer);

});

router.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
