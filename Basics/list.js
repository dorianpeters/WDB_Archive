var todos = ["Buy new turtle"];

do {
var input = prompt("What would you like to do?");  

  if(input === "list") {
  	todos.forEach(function(todo, i) {
  		console.log(i + ": " + todo);
  	});
    console.log("**********");
  } else if (input === "new") {
  var newTodo = prompt("Enter new todo");
  todos.push(newTodo);
  } else if(input ==="delete") {
  	var index = prompt("Enter index of todo to delete");
  	todos.splice(index,1);
  	console.log("Deleted Todo");
  }
} while (input !== "quit");// end of loop

console.log("OK, You quit the app.");