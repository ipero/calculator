var express = require ("express");
var router = express.Router();
var path = require("path");


router.post("/calc", function(req,res){

    console.log("what is our request", req.body);

    res.send("Sent");

});

router.get("/*", function(req, res){
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});

module.exports = router;
