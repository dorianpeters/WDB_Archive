var express = require("express"),
    app = express(),
    bodyParser = require("body-parser"),
    mongoose = require("mongoose");
    
mongoose.connect("mongodb://localhost/yelp_camp");
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String
});

var Campground = mongoose.model("Campground", campgroundSchema);

// Campground.create(
//   {
//     name: "Granite Hill", 
//     image: "https://farm4.staticflickr.com/3872/14435096036_39db8f04bc.jpg",
//     description: "This is a huge granite hill, no bathroooms. No Water. Bueautiful granite!"
//   },
//   function(err, campground) {
//     if(err){
//       console.log(err);
//     } else {
//       console.log("NEWLY CREATED CAMPGROUND:");
//       console.log(campground);
//     }
//   });
    
app.get("/", function(req,res) {
  res.render("landing");
});

app.get("/campgrounds", function(req, res) {
  //Get all campgrounds from db
  Campground.find({}, function(err, allCampgrounds) {
    if(err){
      console.log(err);
    } else {
       res.render("index", {campgrounds:allCampgrounds});
    }
  })
});

app.post("/campgrounds", function(req, res) {
  var name = req.body.name;
  var image = req.body.image;
  var newCampground = {name: name, image: image};
  // Create a new campground and save to db.
  Campground.create(newCampground, function(err, newlyCreated) {
    if(err){
      console.log(err);
    } else {
      res.redirect("/campgrounds");
    }
  });
});

app.get("/campgrounds/new", function(req, res) {
  res.render("new.ejs");
});

app.get("/campgrounds/:id", function(req, res) {
  //find the campground with the provided ID
  Campground.findByID(req.params.id).populate("comments").exec(function(err, foundCampground){
    if(err) {
      console.log(err);
    } else {
      res.render("show", campground:foundCampground});
    }
  })
});

app.listen(process.env.PORT, process.env.IP, function() {
  console.log("The YelpCamp server has started!!!");
});