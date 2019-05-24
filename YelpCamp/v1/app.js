var express = require("express");
var app = express();
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

var campgrounds = [
  {name: "Salmon Creek", image: "https://farm2.staticflickr.com/1281/4684194306_18ebcdb01c.jpg"},
  {name: "Granite Hill", image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg"},
  {name: "Mountain Goat's Rest", image: "https://farm7.staticflickr.com/6004/6017807192_bf8b96b3ff.jpg"}
];
    
app.get("/", function(req,res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  res.render("campgrounds", {campgrounds:campgrounds});
});


app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  campgrounds.push(newCampground);
  res.redirect("/campgrounds");
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The YelpCamp server has started!!!");
});