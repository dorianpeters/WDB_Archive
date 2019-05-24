var express = require("express");
var app = express();

app.get("/", function(req, res) {
  res.send("Hi there, welcome to my assignment");
});

app.get("/speak/:animal", function(req, res) {
  var str = "The "+ req.params.animal + " says \'";
  if (req.params.animal === "pig")
    str+='Oink'
  else if (req.params.animal === "cow")
    str+='Moo'  
  else if (req.params.animal === "dog")
    str+='Woof Woof!';
  str+="\'";
	res.send(str);
});

app.get("/repeat/:word/:num", function(req, res) {
  var str = "";
  for (var i = 0; i < req.params.num; i++) {
    str+= req.params.word + " ";
  }
	res.send(str);
});

app.get("*", function(req, res) {
	res.send("Sorry, page not found...What are you doing with your life?");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("Server has started!");
});