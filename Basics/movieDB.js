var movies = [ 
  {
    title: "Incredibles",
    seen: true,
    stars: 5
  },
  {
    title: "Star Trek",
    seen: true,
    stars: 5
  },
  {
    title: "Star Wars",
    seen: false,
    stars: 4
  }
];

function printMovies() {
  movies.forEach(function(arr) {
    var output = "You have ";
    if (arr.seen === true)
      output += "watched ";
    else 
      output += "not seen ";
    output += "\"" + arr.title + "\" - " + arr.stars + " stars";
    console.log(output);
  });
}